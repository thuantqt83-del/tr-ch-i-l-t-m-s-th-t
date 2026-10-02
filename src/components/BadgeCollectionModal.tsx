import React from 'react';
import { Badge } from '../types/game';
import { WinnerBadge } from './WinnerBadge';

interface Props {
  badges: Badge[];
  unlockedIds: string[];
  onClose: () => void;
}

export const BadgeCollectionModal: React.FC<Props> = ({ badges, unlockedIds, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 border-2 border-yellow-500/70 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
              🎖️ BẢNG HUY HIỆU CHIẾN THẮNG
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Đã mở khóa: <span className="text-yellow-400 font-bold">{unlockedIds.length} / {badges.length}</span> huy hiệu
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-xl transition"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {badges.map((b) => {
            const isUnlocked = unlockedIds.includes(b.id);
            if (isUnlocked) {
              return <WinnerBadge key={b.id} badge={{ ...b, unlocked: true }} />;
            }
            return (
              <div
                key={b.id}
                className="relative rounded-2xl p-5 border-2 border-slate-700 bg-slate-800/40 opacity-60 flex flex-col justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-3xl grayscale">
                    <span>🔒</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700 text-slate-400">
                      Chưa mở khóa
                    </span>
                    <h4 className="text-lg font-bold text-slate-400 mt-1">{b.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{b.description}</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700/50 flex justify-between text-xs text-slate-400">
                  <span>Yêu cầu:</span>
                  <span className="text-slate-300">{b.requirement}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-8 rounded-full border border-slate-600 transition"
          >
            ĐÓNG
          </button>
        </div>
      </div>
    </div>
  );
};
