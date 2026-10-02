import React from 'react';
import { Badge } from '../types/game';

interface Props {
  badge: Badge;
  showDetails?: boolean;
}

export const WinnerBadge: React.FC<Props> = ({ badge, showDetails = true }) => {
  return (
    <div className="relative group perspective">
      <div className={`relative overflow-hidden rounded-2xl p-5 border-2 ${badge.borderColor} bg-slate-800/95 transition-all duration-300 transform group-hover:scale-105 shadow-xl`}>
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 badge-shine pointer-events-none opacity-40" />

        {/* Badge Medal Header */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            {/* Glowing aura */}
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${badge.color} blur-md opacity-60 animate-pulse`} />
            
            {/* Medal Icon Disc */}
            <div className={`relative w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${badge.color} text-3xl shadow-inner border-2 border-white/60`}>
              <span>{badge.icon}</span>
            </div>
          </div>

          <div className="text-left flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/20 text-yellow-300 border border-yellow-400/40">
                {badge.tier === 'gold' ? 'Huy Hiệu Vàng' : badge.tier === 'silver' ? 'Huy Hiệu Bạc' : badge.tier === 'bronze' ? 'Huy Hiệu Đồng' : 'Huy Hiệu Đặc Biệt'}
              </span>
            </div>
            <h4 className="text-xl font-black text-white truncate drop-shadow mt-1">
              {badge.name}
            </h4>
            <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">
              {badge.description}
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="mt-3 pt-3 border-t border-slate-700 flex justify-between items-center text-xs">
            <span className="text-slate-400">Điều kiện:</span>
            <span className="text-yellow-400 font-semibold">{badge.requirement}</span>
          </div>
        )}
      </div>
    </div>
  );
};
