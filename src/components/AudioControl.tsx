import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Flame } from 'lucide-react';
import { sound } from '../utils/audio';

interface AudioControlProps {
  isBgmActive: boolean;
  onToggleBgm: () => void;
}

export const AudioControl: React.FC<AudioControlProps> = ({ isBgmActive, onToggleBgm }) => {
  const [isMuted, setIsMuted] = useState(sound.getMuted());
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(sound.getBgmVolume());

  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    sound.setMute(next);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    sound.setBgmVolume(val);
  };

  return (
    <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
      {/* Volume slider popover on hover/click */}
      {showVolume && (
        <div className="bg-slate-800/90 border border-slate-700 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2 shadow-xl animate-fadeIn">
          <span className="text-xs text-slate-300 font-bold">Âm lượng</span>
          <input
            type="range"
            min="0"
            max="0.4"
            step="0.02"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-pink-500 cursor-pointer"
          />
        </div>
      )}

      {/* Upbeat BGM Mode status badge */}
      <button
        onClick={onToggleBgm}
        title={isBgmActive ? "Tắt Nhạc Nền Sôi Động" : "Bật Nhạc Nền Sôi Động"}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold transition shadow-lg backdrop-blur-md ${
          isBgmActive
            ? 'bg-gradient-to-r from-pink-500/80 to-purple-600/80 border-pink-400 text-white animate-pulse'
            : 'bg-slate-800/80 border-slate-600 text-slate-400 hover:text-white'
        }`}
      >
        <Flame className={`w-3.5 h-3.5 ${isBgmActive ? 'text-yellow-300 animate-bounce' : ''}`} />
        <span className="hidden sm:inline">Nhạc sôi động:</span>
        <span>{isBgmActive ? 'BẬT' : 'TẮT'}</span>
        {isBgmActive && (
          <span className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-yellow-300 animate-[bounce_0.8s_infinite_100ms] h-full" />
            <span className="w-0.5 bg-yellow-300 animate-[bounce_0.8s_infinite_300ms] h-2/3" />
            <span className="w-0.5 bg-yellow-300 animate-[bounce_0.8s_infinite_200ms] h-4/5" />
          </span>
        )}
      </button>

      {/* Master Mute Toggle */}
      <button
        onClick={handleToggleMute}
        onMouseEnter={() => setShowVolume(true)}
        className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-200 hover:text-white shadow-lg backdrop-blur-md transition active:scale-95"
        title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
      >
        {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-green-400" />}
      </button>
    </div>
  );
};
