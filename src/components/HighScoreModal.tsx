import React, { useEffect, useState } from 'react';
import { fireCelebrationConfetti } from '../utils/confetti';
import { sound } from '../utils/audio';

interface HighScoreModalProps {
  score: number;
  previousRecord: number;
  onClose: () => void;
}

export const HighScoreModal: React.FC<HighScoreModalProps> = ({ score, previousRecord, onClose }) => {
  const [displayedScore, setDisplayedScore] = useState(previousRecord);

  useEffect(() => {
    // Launch celebratory confetti burst
    fireCelebrationConfetti();
    sound.playSound('fanfare');

    // Score counting animation from previousRecord up to score
    const duration = 1200;
    const start = previousRecord;
    const end = score;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const current = Math.floor(start + (end - start) * (1 - Math.pow(2, -10 * progress)));
      setDisplayedScore(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setDisplayedScore(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [score, previousRecord]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-lg w-full bg-slate-900 border-4 border-yellow-400 rounded-3xl p-8 text-center shadow-[0_0_60px_rgba(250,204,21,0.5)] overflow-hidden">
        
        {/* Rotating sunburst aura */}
        <div className="absolute -top-32 -left-32 -right-32 -bottom-32 pointer-events-none opacity-20 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-[conic-gradient(from_0deg,#ffd700,#ff6b6b,#4ecdc4,#ffd700)] animate-[spin_12s_linear_infinite]" />
        </div>

        {/* Floating animated trophy */}
        <div className="relative z-10 my-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-yellow-400/30 rounded-full blur-xl animate-pulse" />
            <div className="trophy-float w-32 h-32 flex items-center justify-center text-7xl filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
              🏆
            </div>
            {/* Sparkles around trophy */}
            <span className="absolute -top-2 -left-3 text-2xl animate-bounce">✨</span>
            <span className="absolute top-2 -right-3 text-3xl animate-pulse">🌟</span>
            <span className="absolute -bottom-1 right-2 text-2xl animate-ping">🎉</span>
          </div>
        </div>

        {/* High Score Banner */}
        <div className="relative z-10 mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-wider bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-slate-950 shadow-lg">
            🔥 KỶ LỤC MỚI ĐƯỢC THIẾT LẬP! 🔥
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 mt-3 drop-shadow-md">
            XUẤT SẮC ĐỈNH CAO!
          </h2>
          <p className="text-slate-300 text-sm mt-1">
            Bạn đã vượt qua kỷ lục trước đó ({previousRecord} điểm)!
          </p>
        </div>

        {/* Big Animated Score Display */}
        <div className="relative z-10 my-4 bg-slate-800/80 rounded-2xl p-5 border-2 border-yellow-500/50">
          <div className="text-xs uppercase font-bold tracking-widest text-yellow-300">
            ĐIỂM KỶ LỤC CỦA BẠN
          </div>
          <div className="text-6xl sm:text-7xl font-black text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.8)] my-1">
            {displayedScore}
          </div>
          <div className="text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1">
            <span>+{score - previousRecord} điểm so với kỷ lục cũ</span>
          </div>
        </div>

        {/* Actions */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-6">
          <button
            onClick={() => {
              fireCelebrationConfetti();
              sound.playSound('correct');
            }}
            className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black py-3 px-5 rounded-2xl shadow-lg transition transform hover:scale-105 active:scale-95 text-base flex items-center justify-center gap-2"
          >
            <span>🎉 BẮN PHÁO HOA</span>
          </button>
          
          <button
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-5 rounded-2xl shadow-lg transition transform hover:scale-105 active:scale-95 text-base"
          >
            XEM CHIẾN TÍCH ➔
          </button>
        </div>
      </div>
    </div>
  );
};
