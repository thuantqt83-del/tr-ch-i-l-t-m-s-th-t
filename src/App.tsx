/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { roundsData, allBadges } from './data/gameData';
import { Badge, Option } from './types/game';
import { sound } from './utils/audio';
import { WinnerBadge } from './components/WinnerBadge';
import { HighScoreModal } from './components/HighScoreModal';
import { BadgeCollectionModal } from './components/BadgeCollectionModal';
import { AudioControl } from './components/AudioControl';
import { Trophy, Award, RefreshCw, Volume2, Sparkles, ShieldCheck, Sun, Moon } from 'lucide-react';

const HIGH_SCORE_KEY = 'lat_mo_su_that_highscore';
const UNLOCKED_BADGES_KEY = 'lat_mo_su_that_unlocked_badges';

export default function App() {
  // Screen state: 'start' | 'game' | 'result'
  const [screen, setScreen] = useState<'start' | 'game' | 'result'>('start');
  
  // Theme state: 'bright' (default as requested) | 'dark'
  const [theme, setTheme] = useState<'bright' | 'dark'>('bright');

  // Game progress state
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Visual feedback on selected card
  const [selectedCardIdx, setSelectedCardIdx] = useState<number | null>(null);
  const [cardStatus, setCardStatus] = useState<'correct' | 'wrong' | null>(null);
  const [feedbackOverlay, setFeedbackOverlay] = useState<{ show: boolean; isCorrect: boolean; text: string }>({
    show: false,
    isCorrect: false,
    text: '',
  });

  // Tracking game statistics for badge unlocking
  const [fastestAnswer, setFastestAnswer] = useState(999);
  const [correctCount, setCorrectCount] = useState(0);
  const [highScore, setHighScore] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const [unlockedBadgeIds, setUnlockedBadgeIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(UNLOCKED_BADGES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [previousRecord, setPreviousRecord] = useState(0);
  const [showHighScoreModal, setShowHighScoreModal] = useState(false);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [isBgmActive, setIsBgmActive] = useState(false);

  const timerIntervalRef = useRef<number | null>(null);

  // Stop timer helper
  const stopTimer = () => {
    if (timerIntervalRef.current !== null) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // Start new game
  const handleStartGame = () => {
    // Start energetic background music
    sound.startBGM();
    setIsBgmActive(true);

    setScore(0);
    setCurrentRoundIndex(0);
    setCorrectCount(0);
    setFastestAnswer(999);
    setSelectedCardIdx(null);
    setCardStatus(null);
    setIsNewRecord(false);
    setShowHighScoreModal(false);

    setScreen('game');
    loadRound(0);
  };

  // Load a round
  const loadRound = (roundIdx: number) => {
    if (roundIdx >= roundsData.length) {
      handleEndGame();
      return;
    }

    setIsProcessing(false);
    setSelectedCardIdx(null);
    setCardStatus(null);
    setTimeLeft(10);

    const round = roundsData[roundIdx];
    // Shuffle options
    const shuffled = [...round.options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);

    stopTimer();
    timerIntervalRef.current = window.setInterval(() => {
      setTimeLeft((prev) => {
        const nextTime = prev - 1;
        if (nextTime <= 3 && nextTime > 0) {
          sound.playSound('tick');
        }
        if (nextTime <= 0) {
          stopTimer();
          sound.playSound('timeout');
          handleChoiceTimeout();
          return 0;
        }
        return nextTime;
      });
    }, 1000);
  };

  // Handle timeout
  const handleChoiceTimeout = () => {
    setIsProcessing(true);
    showFeedback(false, "HẾT GIỜ!");
  };

  // Handle player choice
  const handleMakeChoice = (isActuallyDanger: boolean, optionIndex: number, choseDanger: boolean) => {
    if (isProcessing) return;
    setIsProcessing(true);
    stopTimer();

    // Check correctness
    const isCorrect = (isActuallyDanger === choseDanger);
    const timeSpent = 10 - timeLeft;
    if (timeSpent < fastestAnswer) {
      setFastestAnswer(timeSpent);
    }

    setSelectedCardIdx(optionIndex);
    setCardStatus(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      sound.playSound('correct');
      const roundEarned = 10 + timeLeft * 2; // Speed bonus
      setScore((prev) => prev + roundEarned);
      setCorrectCount((prev) => prev + 1);
      showFeedback(true, "+ ĐIỂM");
    } else {
      sound.playSound('wrong');
      showFeedback(false, "SAI RỒI!");
    }
  };

  // Show zoom feedback overlay
  const showFeedback = (isCorrect: boolean, text: string) => {
    setFeedbackOverlay({ show: true, isCorrect, text });

    setTimeout(() => {
      setFeedbackOverlay({ show: false, isCorrect: false, text: '' });
      setSelectedCardIdx(null);
      setCardStatus(null);

      setCurrentRoundIndex((prev) => {
        const nextRound = prev + 1;
        loadRound(nextRound);
        return nextRound;
      });
    }, 1200);
  };

  // Handle end game & badge calculations
  const handleEndGame = () => {
    stopTimer();
    setScreen('result');

    // Calculate badges
    const newUnlocked = [...unlockedBadgeIds];

    // Winner badge logic
    let winnerBadgeId = 'badge-bronze';
    if (score > 120) {
      winnerBadgeId = 'badge-gold';
    } else if (score > 60) {
      winnerBadgeId = 'badge-silver';
    }

    if (!newUnlocked.includes(winnerBadgeId)) {
      newUnlocked.push(winnerBadgeId);
    }

    // Special badges
    if (correctCount >= 5 && !newUnlocked.includes('badge-perfect')) {
      newUnlocked.push('badge-perfect');
    }
    if (fastestAnswer <= 2 && !newUnlocked.includes('badge-speed')) {
      newUnlocked.push('badge-speed');
    }

    setUnlockedBadgeIds(newUnlocked);
    try {
      localStorage.setItem(UNLOCKED_BADGES_KEY, JSON.stringify(newUnlocked));
    } catch {
      // localStorage error fallback
    }

    // High score check
    const prevHigh = highScore;
    if (score > prevHigh && score > 0) {
      setIsNewRecord(true);
      setPreviousRecord(prevHigh);
      setHighScore(score);
      try {
        localStorage.setItem(HIGH_SCORE_KEY, score.toString());
      } catch {
        // localStorage error fallback
      }
      // Show celebration modal for high score!
      setTimeout(() => {
        setShowHighScoreModal(true);
      }, 500);
    } else {
      sound.playSound('correct');
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopTimer();
      sound.stopBGM();
    };
  }, []);

  // Determine current earned badge for display on result screen
  const getPrimaryWinnerBadge = (): Badge => {
    if (score > 120) return allBadges.find((b) => b.id === 'badge-gold')!;
    if (score > 60) return allBadges.find((b) => b.id === 'badge-silver')!;
    return allBadges.find((b) => b.id === 'badge-bronze')!;
  };

  // Toggle energetic background music
  const toggleBgm = () => {
    if (isBgmActive) {
      sound.stopBGM();
      setIsBgmActive(false);
    } else {
      sound.startBGM();
      setIsBgmActive(true);
    }
  };

  const isBright = theme === 'bright';

  return (
    <div className={`${isBright ? 'bg-bright-pattern text-slate-900' : 'bg-dark-pattern text-white'} min-h-screen flex items-center justify-center select-none px-4 py-8 relative transition-colors duration-500`}>
      
      {/* Top Left Theme Switcher */}
      <div className="fixed top-4 left-4 z-40">
        <button
          onClick={() => setTheme(isBright ? 'dark' : 'bright')}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition shadow-lg backdrop-blur-md cursor-pointer ${
            isBright
              ? 'bg-white/90 border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900'
              : 'bg-slate-800/80 border-slate-600 text-yellow-300 hover:bg-slate-800'
          }`}
          title="Chuyển đổi giao diện Sáng / Tối"
        >
          {isBright ? <Sun className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '10s' }} /> : <Moon className="w-4 h-4 text-blue-400" />}
          <span>{isBright ? 'Giao diện Sáng' : 'Giao diện Tối'}</span>
        </button>
      </div>

      {/* Floating Audio Controller */}
      <AudioControl isBgmActive={isBgmActive} onToggleBgm={toggleBgm} />

      <div className="w-full max-w-5xl mx-auto relative z-10">

        {/* ================= START SCREEN ================= */}
        {screen === 'start' && (
          <div className={`text-center pop-in p-8 sm:p-12 rounded-3xl border-4 shadow-2xl backdrop-blur-md relative overflow-hidden transition-all ${
            isBright
              ? 'bg-white/95 border-blue-500 text-slate-800 shadow-blue-500/10'
              : 'bg-slate-800/90 border-blue-500 text-white'
          }`}>
            
            {/* Decorative background glow */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold mb-4 border ${
              isBright
                ? 'bg-blue-50 border-blue-200 text-blue-800'
                : 'bg-slate-700/80 border-slate-600 text-yellow-300'
            }`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>TRÒ CHƠI TUYÊN TRUYỀN GIÁO DỤC PHÒNG CHỐNG MA TÚY</span>
            </div>

            <h1 className="text-4xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-4 drop-shadow tracking-tight">
              LẬT MỞ SỰ THẬT
            </h1>
            
            <h2 className={`text-xl sm:text-3xl font-extrabold mb-6 ${isBright ? 'text-amber-600' : 'text-yellow-300'}`}>
              NHẬN DIỆN HIỂM HỌA MA TÚY TRÁ HÌNH
            </h2>

            {/* High score badge on start screen */}
            {highScore > 0 && (
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl mb-6 shadow-sm border ${
                isBright
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-yellow-500/20 border-yellow-400/50 text-yellow-200'
              }`}>
                <Trophy className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-bold">Kỷ lục điểm cao hiện tại:</span>
                <span className="text-lg font-black text-amber-600">{highScore} điểm</span>
              </div>
            )}

            <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${isBright ? 'text-slate-600' : 'text-slate-300'}`}>
              Nhiệm vụ của bạn: Trong vòng <strong className="text-pink-600 font-black">10 giây</strong> mỗi vòng, hãy quan sát 2 hình ảnh và tìm ra <strong className="text-red-600 font-black">"Cạm Bẫy"</strong> (Ma túy giả danh) bằng cách chọn <strong className="text-red-600 font-black">Thẻ Đỏ</strong>. Hãy cẩn thận với những vỏ bọc ngọt ngào!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStartGame}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-xl sm:text-2xl py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center gap-3 cursor-pointer"
              >
                <span>▶ BẮT ĐẦU CHƠI</span>
              </button>

              <button
                onClick={() => setShowBadgeModal(true)}
                className={`font-bold text-base sm:text-lg py-4 px-8 rounded-full shadow-md transition hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border ${
                  isBright
                    ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-800'
                    : 'bg-slate-700/80 hover:bg-slate-600 border-slate-500 text-yellow-300'
                }`}
              >
                <Award className="w-5 h-5 text-amber-500" />
                <span>HUY HIỆU ({unlockedBadgeIds.length}/{allBadges.length})</span>
              </button>
            </div>

            <p className={`mt-6 text-sm flex items-center justify-center gap-1.5 ${isBright ? 'text-slate-500' : 'text-slate-400'}`}>
              <Volume2 className="w-4 h-4 text-emerald-600" />
              <span>Nhạc nền sôi động tự động bật khi bắt đầu chơi để trải nghiệm kịch tính!</span>
            </p>
          </div>
        )}

        {/* ================= GAME SCREEN ================= */}
        {screen === 'game' && currentRoundIndex < roundsData.length && (
          <div className="relative">
            {/* Top Stats Bar */}
            <div className={`flex justify-between items-center mb-6 p-4 rounded-2xl border-2 shadow-xl backdrop-blur-md transition-all ${
              isBright
                ? 'bg-white/90 border-slate-200 text-slate-800 shadow-slate-200/50'
                : 'bg-slate-800/80 border-slate-600 text-white'
            }`}>
              <div className="text-xl sm:text-2xl font-black text-blue-600 flex items-center gap-2">
                <span>Vòng:</span>
                <span className={isBright ? 'text-slate-900' : 'text-white'}>{currentRoundIndex + 1}/{roundsData.length}</span>
              </div>

              {/* Urgency animated timer */}
              <div className={`text-3xl sm:text-4xl font-black transition-all ${timeLeft <= 3 ? 'timer-urgent' : isBright ? 'text-slate-900' : 'text-white'}`}>
                {timeLeft}s
              </div>

              <div className="text-xl sm:text-2xl font-black text-amber-500 flex items-center gap-2">
                <span>Điểm:</span>
                <span className={isBright ? 'text-slate-900' : 'text-white'}>{score}</span>
              </div>
            </div>

            {/* Question Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 drop-shadow-sm mb-2">
                {roundsData[currentRoundIndex].title}
              </h2>
              <p className={`text-base sm:text-lg max-w-xl mx-auto font-semibold ${isBright ? 'text-slate-600' : 'text-slate-300'}`}>
                {roundsData[currentRoundIndex].desc}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {shuffledOptions.map((opt, idx) => {
                const isSelected = selectedCardIdx === idx;
                let cardStyle = `card-hover p-6 rounded-3xl border-2 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-xl ${
                  isBright
                    ? 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-300/40'
                    : 'bg-slate-800/95 border-slate-600 text-white'
                }`;

                if (isSelected && cardStatus === 'correct') {
                  cardStyle += " border-emerald-500 ring-4 ring-emerald-500/40 bg-emerald-50/90";
                } else if (isSelected && cardStatus === 'wrong') {
                  cardStyle += " border-red-500 ring-4 ring-red-500/40 bg-red-50/90 shake";
                }

                return (
                  <div key={opt.id} className={cardStyle}>
                    {/* SVG Image Container */}
                    <div
                      className="svg-container"
                      dangerouslySetInnerHTML={{ __html: opt.img }}
                    />

                    <h3 className={`text-xl sm:text-2xl font-black mb-2 tracking-wide ${isBright ? 'text-slate-900' : 'text-white'}`}>
                      {opt.text}
                    </h3>
                    
                    <p className={`text-sm mb-6 min-h-[48px] flex items-center justify-center font-medium ${isBright ? 'text-slate-600' : 'text-slate-300'}`}>
                      {opt.info}
                    </p>

                    <div className="flex gap-4 w-full">
                      <button
                        onClick={() => handleMakeChoice(opt.isDanger, idx, false)}
                        disabled={isProcessing}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-black py-3.5 rounded-2xl shadow-lg transition active:scale-95 text-sm sm:text-base cursor-pointer"
                      >
                        ✔️ AN TOÀN
                      </button>
                      <button
                        onClick={() => handleMakeChoice(opt.isDanger, idx, true)}
                        disabled={isProcessing}
                        className="flex-1 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-black py-3.5 rounded-2xl shadow-lg transition active:scale-95 text-sm sm:text-base cursor-pointer"
                      >
                        ⚠️ CẠM BẪY
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feedback Pop Zoom Overlay */}
            {feedbackOverlay.show && (
              <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
                <div
                  className={`text-6xl sm:text-8xl font-black transform transition-all duration-300 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] pop-in ${
                    feedbackOverlay.isCorrect ? 'text-emerald-500' : 'text-red-500'
                  }`}
                >
                  {feedbackOverlay.text}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= RESULT SCREEN ================= */}
        {screen === 'result' && (
          <div className={`text-center pop-in p-8 sm:p-12 rounded-3xl border-4 shadow-2xl relative overflow-hidden backdrop-blur-md ${
            isBright
              ? 'bg-white/95 border-emerald-500 text-slate-800 shadow-emerald-500/10'
              : 'bg-slate-800/90 border-emerald-500 text-white'
          }`}>
            
            {/* Victory Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

            <h1 className="text-4xl sm:text-6xl font-black text-emerald-600 mb-3 tracking-tight">
              TỔNG KẾT CHIẾN DỊCH
            </h1>
            <p className={`text-xl sm:text-2xl mb-4 font-bold ${isBright ? 'text-slate-600' : 'text-slate-200'}`}>
              Bạn đã nhận diện được:
            </p>
            
            {/* Big Final Score */}
            <div
              id="final-score"
              className="text-7xl sm:text-9xl font-black text-amber-500 mb-4 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]"
            >
              {score}
            </div>

            {/* Dynamic Evaluation Text */}
            <p className="text-lg sm:text-2xl text-pink-600 font-black mb-8 px-4">
              {score > 120
                ? "🏆 XUẤT SẮC! BẠN LÀ CHUYÊN GIA NHẬN DIỆN MA TÚY!"
                : score > 60
                ? "⭐ KHÁ LẮM! HÃY LUÔN GIỮ SỰ CẢNH GIÁC NHÉ!"
                : "⚠️ NGUY HIỂM! BẠN CẦN TRANG BỊ THÊM KIẾN THỨC ĐỂ BẢO VỆ MÌNH!"}
            </p>

            {/* HUY HIỆU NGƯỜI CHIẾN THẮNG */}
            <div className="max-w-md mx-auto mb-8">
              <div className="text-xs uppercase font-extrabold tracking-widest text-amber-600 mb-3 flex items-center justify-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>HUY HIỆU CHIẾN THẮNG ĐẠT ĐƯỢC</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>

              <WinnerBadge badge={getPrimaryWinnerBadge()} />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleStartGame}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-xl sm:text-2xl py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-6 h-6" />
                <span>↻ CHƠI LẠI</span>
              </button>

              <button
                onClick={() => setShowBadgeModal(true)}
                className={`font-bold text-lg py-4 px-8 rounded-full shadow-md transition hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer border ${
                  isBright
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                    : 'bg-slate-700 hover:bg-slate-600 border-yellow-400/50 text-yellow-300'
                }`}
              >
                <Award className="w-5 h-5 text-amber-500" />
                <span>BỘ SƯU TẬP HUY HIỆU</span>
              </button>

              {isNewRecord && (
                <button
                  onClick={() => setShowHighScoreModal(true)}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black text-lg py-4 px-8 rounded-full shadow-md transition hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <Trophy className="w-5 h-5" />
                  <span>KỶ LỤC CỦA BẠN</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>

      {/* ================= HIGH SCORE CELEBRATION MODAL ================= */}
      {showHighScoreModal && (
        <HighScoreModal
          score={score}
          previousRecord={previousRecord}
          onClose={() => setShowHighScoreModal(false)}
        />
      )}

      {/* ================= ALL BADGES SHOWCASE MODAL ================= */}
      {showBadgeModal && (
        <BadgeCollectionModal
          badges={allBadges}
          unlockedIds={unlockedBadgeIds}
          onClose={() => setShowBadgeModal(false)}
        />
      )}

    </div>
  );
}
