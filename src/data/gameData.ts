import { Badge, Round } from '../types/game';

export const svgs = {
  // 1. Safe: Bánh quy sô-cô-la (Realistic 3D crispy chocolate chip cookies with chocolate chunks & warm aroma sparkles)
  cookie: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-2 overflow-hidden">
      <!-- Animated sparkles of freshness -->
      <span class="absolute top-4 left-8 text-xl animate-twinkle select-none pointer-events-none">✨</span>
      <span class="absolute bottom-6 right-10 text-lg animate-twinkle select-none pointer-events-none" style="animation-delay: 0.9s;">✨</span>
      
      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="cookieDough" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#EED9B3"/>
            <stop offset="65%" stop-color="#D4A76A"/>
            <stop offset="100%" stop-color="#9E6B34"/>
          </radialGradient>
          <radialGradient id="cookieShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(0,0,0,0.35)"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
          <radialGradient id="chocChip" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#5A3214"/>
            <stop offset="70%" stop-color="#321A08"/>
            <stop offset="100%" stop-color="#190B03"/>
          </radialGradient>
        </defs>

        <!-- Shadow on table -->
        <ellipse cx="100" cy="140" rx="75" ry="14" fill="url(#cookieShadow)"/>

        <!-- Cookie 1 (Back left) -->
        <g transform="translate(-15, -10) scale(0.85)">
          <path d="M 65 30 Q 110 25 130 55 Q 145 95 125 125 Q 90 145 55 130 Q 25 110 30 70 Q 35 35 65 30 Z" fill="url(#cookieDough)"/>
          <ellipse cx="65" cy="55" rx="7" ry="5" fill="url(#chocChip)"/>
          <ellipse cx="95" cy="48" rx="8" ry="6" fill="url(#chocChip)"/>
          <ellipse cx="105" cy="85" rx="9" ry="7" fill="url(#chocChip)"/>
          <ellipse cx="60" cy="95" rx="7" ry="6" fill="url(#chocChip)"/>
        </g>

        <!-- Main Cookie (Front Right - 3D Realistic) -->
        <g>
          <path d="M 80 40 Q 135 32 165 70 Q 185 110 155 142 Q 110 162 65 145 Q 30 120 38 78 Q 45 45 80 40 Z" fill="url(#cookieDough)" stroke="#8C5C26" stroke-width="1.5"/>
          
          <!-- Texture cracks -->
          <path d="M 75 60 Q 88 72 95 65 Q 105 75 118 70" stroke="#8C5A2B" stroke-width="2" fill="none" opacity="0.6"/>
          <path d="M 60 95 Q 75 105 85 98 Q 100 112 120 102" stroke="#8C5A2B" stroke-width="2" fill="none" opacity="0.6"/>
          <path d="M 125 65 Q 140 80 145 95" stroke="#8C5A2B" stroke-width="1.5" fill="none" opacity="0.5"/>

          <!-- 3D Melted Chocolate Chunks with specular glint -->
          <g>
            <path d="M 65 65 Q 75 58 82 66 Q 85 76 75 80 Q 62 78 65 65 Z" fill="url(#chocChip)"/>
            <ellipse cx="71" cy="66" rx="2.5" ry="1.5" fill="#A0693B" opacity="0.8"/>
            
            <path d="M 115 55 Q 128 50 134 60 Q 135 72 125 76 Q 112 72 115 55 Z" fill="url(#chocChip)"/>
            <ellipse cx="122" cy="57" rx="3" ry="1.5" fill="#A0693B" opacity="0.8"/>

            <path d="M 90 90 Q 106 82 114 94 Q 112 110 98 112 Q 84 108 90 90 Z" fill="url(#chocChip)"/>
            <ellipse cx="98" cy="94" rx="4" ry="2" fill="#A0693B" opacity="0.8"/>

            <path d="M 135 98 Q 148 94 150 106 Q 146 118 136 116 Q 128 110 135 98 Z" fill="url(#chocChip)"/>
            <ellipse cx="140" cy="102" rx="2.5" ry="1.5" fill="#A0693B" opacity="0.8"/>

            <path d="M 52 105 Q 64 98 68 110 Q 64 122 52 118 Q 45 112 52 105 Z" fill="url(#chocChip)"/>
            <ellipse cx="57" cy="108" rx="2.5" ry="1.5" fill="#A0693B" opacity="0.8"/>
          </g>

          <!-- Golden crumbs -->
          <circle cx="160" cy="145" r="2.5" fill="#C4924A"/>
          <circle cx="168" cy="140" r="1.5" fill="#C4924A"/>
          <circle cx="38" cy="138" r="2" fill="#C4924A"/>
          <circle cx="100" cy="150" r="2.5" fill="#8C5C26"/>
        </g>
      </svg>
      <div class="absolute bottom-2 left-3 bg-white/90 text-[10px] font-bold text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
        🍪 Bánh nướng truyền thống
      </div>
    </div>
  `,

  // 2. Danger: Bánh lười (Lazy Cake / CBD Cannabis Cake with shiny holographic packaging & weed leaf)
  weedCake: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-950/80 via-slate-900 to-purple-950 p-2 overflow-hidden border border-rose-500/30">
      <!-- Animated hazard warning aura -->
      <div class="absolute inset-0 bg-red-600/10 animate-pulse pointer-events-none"></div>
      
      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-[0_10px_20px_rgba(244,63,94,0.4)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="foilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FF007F"/>
            <stop offset="40%" stop-color="#7928CA"/>
            <stop offset="70%" stop-color="#00DFD8"/>
            <stop offset="100%" stop-color="#FF007F"/>
          </linearGradient>
          <linearGradient id="brownieCake" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#4A2511"/>
            <stop offset="60%" stop-color="#2D1508"/>
            <stop offset="100%" stop-color="#180A04"/>
          </linearGradient>
          <linearGradient id="weedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#39FF14"/>
            <stop offset="100%" stop-color="#008000"/>
          </linearGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="142" rx="75" ry="12" fill="rgba(0,0,0,0.6)"/>

        <!-- Torn Dark Brownie peeking out -->
        <g transform="translate(18, 12)">
          <path d="M 30 55 L 75 35 L 85 75 L 35 90 Z" fill="url(#brownieCake)" stroke="#110502" stroke-width="1.5"/>
          <circle cx="45" cy="60" r="3" fill="#22C55E" opacity="0.8"/>
          <circle cx="65" cy="55" r="2.5" fill="#22C55E" opacity="0.8"/>
          <circle cx="55" cy="72" r="3" fill="#22C55E" opacity="0.8"/>
        </g>

        <!-- Flashy Holographic Sachet Packaging -->
        <g>
          <rect x="55" y="25" width="105" height="110" rx="10" fill="url(#foilGrad)" stroke="#FFFFFF" stroke-width="1.5"/>
          
          <!-- Holographic light shine effect line -->
          <path d="M 55 55 L 160 25 L 160 35 L 55 65 Z" fill="rgba(255,255,255,0.4)"/>
          <path d="M 55 105 L 160 75 L 160 85 L 55 115 Z" fill="rgba(255,255,255,0.25)"/>

          <!-- Packaging Badge / Warning -->
          <rect x="68" y="38" width="80" height="30" rx="6" fill="#0F172A" stroke="#FF007F" stroke-width="1.5"/>
          <text x="108" y="52" font-size="11" font-weight="900" fill="#FF007F" text-anchor="middle" letter-spacing="1">LAZY CAKE</text>
          <text x="108" y="63" font-size="8" font-weight="bold" fill="#00DFD8" text-anchor="middle">CBD • CHILL 100%</text>

          <!-- Animated Cannabis Leaf Emblem -->
          <g transform="translate(108, 98) scale(0.65)">
            <path d="M 0 -35 C 10 -20 18 -5 0 10 C -18 -5 -10 -20 0 -35 Z" fill="url(#weedGrad)"/>
            <path d="M -15 -25 C -5 -12 2 0 -12 12 C -24 3 -24 -15 -15 -25 Z" fill="url(#weedGrad)"/>
            <path d="M 15 -25 C 5 -12 -2 0 12 12 C 24 3 24 -15 15 -25 Z" fill="url(#weedGrad)"/>
            <path d="M -25 -5 C -12 2 -4 10 -15 20 C -28 15 -32 4 -25 -5 Z" fill="url(#weedGrad)"/>
            <path d="M 25 -5 C 12 2 4 10 15 20 C 28 15 32 4 25 -5 Z" fill="url(#weedGrad)"/>
            <path d="M 0 5 L 0 25" stroke="#22C55E" stroke-width="3" stroke-linecap="round"/>
          </g>

          <text x="108" y="126" font-size="8" font-weight="900" fill="#FFE600" text-anchor="middle">⚠️ CẤM TRẺ EM</text>
        </g>
      </svg>
      <div class="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow animate-pulse">
        ⚠️ CHỨA CẦN SA
      </div>
    </div>
  `,

  // 3. Safe: Kẹo dẻo gấu (Translucent appetizing 3D gummy bears in vibrant colors)
  gummyBear: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-sky-50 to-amber-50 p-2 overflow-hidden">
      <!-- Animated floating sparkles -->
      <span class="absolute top-5 right-8 text-xl animate-twinkle select-none pointer-events-none">✨</span>
      
      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <!-- Red Gummy Shader -->
          <radialGradient id="redGummy" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#FF758C"/>
            <stop offset="50%" stop-color="#FF1E56"/>
            <stop offset="100%" stop-color="#A80028"/>
          </radialGradient>
          <!-- Green Gummy Shader -->
          <radialGradient id="greenGummy" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#84FAB0"/>
            <stop offset="50%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#047857"/>
          </radialGradient>
          <!-- Yellow Gummy Shader -->
          <radialGradient id="yellowGummy" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#FFF176"/>
            <stop offset="50%" stop-color="#F59E0B"/>
            <stop offset="100%" stop-color="#B45309"/>
          </radialGradient>
        </defs>

        <!-- Shadows -->
        <ellipse cx="65" cy="135" rx="25" ry="8" fill="rgba(0,0,0,0.15)"/>
        <ellipse cx="110" cy="138" rx="28" ry="9" fill="rgba(0,0,0,0.2)"/>
        <ellipse cx="155" cy="135" rx="22" ry="7" fill="rgba(0,0,0,0.15)"/>

        <!-- Green Gummy Bear (Left) -->
        <g transform="translate(40, 45) scale(0.75)">
          <ellipse cx="35" cy="70" rx="22" ry="30" fill="url(#greenGummy)"/>
          <circle cx="35" cy="35" r="20" fill="url(#greenGummy)"/>
          <circle cx="20" cy="22" r="8" fill="url(#greenGummy)"/>
          <circle cx="50" cy="22" r="8" fill="url(#greenGummy)"/>
          <ellipse cx="12" cy="65" rx="8" ry="14" fill="url(#greenGummy)"/>
          <ellipse cx="58" cy="65" rx="8" ry="14" fill="url(#greenGummy)"/>
          <ellipse cx="22" cy="98" rx="10" ry="12" fill="url(#greenGummy)"/>
          <ellipse cx="48" cy="98" rx="10" ry="12" fill="url(#greenGummy)"/>
          <!-- 3D Specular Highlight -->
          <ellipse cx="28" cy="30" rx="6" ry="3" fill="#FFFFFF" opacity="0.6" transform="rotate(-20 28 30)"/>
          <ellipse cx="30" cy="62" rx="8" ry="14" fill="#FFFFFF" opacity="0.3" transform="rotate(-15 30 62)"/>
        </g>

        <!-- Red Gummy Bear (Center - Main) -->
        <g transform="translate(85, 30) scale(0.95)">
          <ellipse cx="35" cy="70" rx="23" ry="32" fill="url(#redGummy)"/>
          <circle cx="35" cy="34" r="22" fill="url(#redGummy)"/>
          <circle cx="18" cy="18" r="9" fill="url(#redGummy)"/>
          <circle cx="52" cy="18" r="9" fill="url(#redGummy)"/>
          <circle cx="18" cy="18" r="5" fill="#FFA5BA"/>
          <circle cx="52" cy="18" r="5" fill="#FFA5BA"/>
          <!-- Snout -->
          <ellipse cx="35" cy="40" rx="9" ry="7" fill="#FF8DA1"/>
          <!-- Arms & Legs -->
          <ellipse cx="10" cy="65" rx="9" ry="15" fill="url(#redGummy)"/>
          <ellipse cx="60" cy="65" rx="9" ry="15" fill="url(#redGummy)"/>
          <ellipse cx="22" cy="100" rx="11" ry="14" fill="url(#redGummy)"/>
          <ellipse cx="48" cy="100" rx="11" ry="14" fill="url(#redGummy)"/>
          <!-- Gelatin Specular Highlights -->
          <ellipse cx="28" cy="28" rx="7" ry="3" fill="#FFFFFF" opacity="0.7" transform="rotate(-25 28 28)"/>
          <ellipse cx="28" cy="62" rx="9" ry="16" fill="#FFFFFF" opacity="0.35" transform="rotate(-15 28 62)"/>
        </g>

        <!-- Yellow Gummy Bear (Right) -->
        <g transform="translate(132, 50) scale(0.72)">
          <ellipse cx="35" cy="70" rx="22" ry="30" fill="url(#yellowGummy)"/>
          <circle cx="35" cy="35" r="20" fill="url(#yellowGummy)"/>
          <circle cx="20" cy="22" r="8" fill="url(#yellowGummy)"/>
          <circle cx="50" cy="22" r="8" fill="url(#yellowGummy)"/>
          <ellipse cx="12" cy="65" rx="8" ry="14" fill="url(#yellowGummy)"/>
          <ellipse cx="58" cy="65" rx="8" ry="14" fill="url(#yellowGummy)"/>
          <ellipse cx="22" cy="98" rx="10" ry="12" fill="url(#yellowGummy)"/>
          <ellipse cx="48" cy="98" rx="10" ry="12" fill="url(#yellowGummy)"/>
          <!-- 3D Specular Highlight -->
          <ellipse cx="28" cy="30" rx="6" ry="3" fill="#FFFFFF" opacity="0.6" transform="rotate(-20 28 30)"/>
        </g>
      </svg>
      <div class="absolute bottom-2 left-3 bg-white/90 text-[10px] font-bold text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
        🍬 Kẹo dẻo hoa quả siêu thị
      </div>
    </div>
  `,

  // 4. Danger: Kẹo dạ quang / Kẹo Vui (Synthetic psychedelic pills with fluorescent radioactive glow)
  funCandy: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-950 via-slate-900 to-emerald-950 p-2 overflow-hidden border border-emerald-500/30">
      <!-- Pulsing radioactive aura -->
      <div class="absolute inset-0 bg-emerald-500/10 animate-pulse pointer-events-none"></div>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-[0_0_25px_rgba(57,255,20,0.5)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neonFoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00FFA3"/>
            <stop offset="50%" stop-color="#DC00FF"/>
            <stop offset="100%" stop-color="#00E5FF"/>
          </linearGradient>
          <radialGradient id="fluoPill" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="40%" stop-color="#00FFA3"/>
            <stop offset="100%" stop-color="#008F4C"/>
          </radialGradient>
          <radialGradient id="pinkPill" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FFFFFF"/>
            <stop offset="40%" stop-color="#FF007F"/>
            <stop offset="100%" stop-color="#800040"/>
          </radialGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="140" rx="70" ry="12" fill="rgba(0,0,0,0.6)"/>

        <!-- Flashy Zip Packaging (Silver holographic border) -->
        <rect x="40" y="20" width="120" height="115" rx="12" fill="url(#neonFoil)" stroke="#FFFFFF" stroke-width="2"/>
        <rect x="46" y="26" width="108" height="103" rx="8" fill="#120826" opacity="0.92"/>

        <!-- Neon Warning Label -->
        <text x="100" y="44" font-size="11" font-weight="900" fill="#00FFA3" text-anchor="middle" letter-spacing="1.5">⚡ KẸO PHÁ TIỆC ⚡</text>
        <line x1="55" y1="48" x2="145" y2="48" stroke="#DC00FF" stroke-width="1.5"/>

        <!-- Pill 1: Glowing Neon Green Pill with skull stamp -->
        <g transform="translate(70, 72)">
          <circle cx="0" cy="0" r="18" fill="url(#fluoPill)" stroke="#00FFA3" stroke-width="1.5"/>
          <!-- Dazed smiley face -->
          <circle cx="-5" cy="-4" r="2.5" fill="#000000"/>
          <circle cx="5" cy="-4" r="2.5" fill="#000000"/>
          <path d="M -8 6 Q 0 12 8 6" stroke="#000000" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#008F4C" stroke-width="1" opacity="0.5"/>
        </g>

        <!-- Pill 2: Electric Pink Pill -->
        <g transform="translate(125, 75)">
          <circle cx="0" cy="0" r="17" fill="url(#pinkPill)" stroke="#FF007F" stroke-width="1.5"/>
          <!-- Skull sign -->
          <circle cx="-4" cy="-3" r="2.5" fill="#FFFFFF"/>
          <circle cx="4" cy="-3" r="2.5" fill="#FFFFFF"/>
          <rect x="-3" y="4" width="6" height="4" fill="#FFFFFF" rx="1"/>
        </g>

        <!-- Pill 3: Half-out Tablet -->
        <g transform="translate(100, 105)">
          <rect x="-18" y="-9" width="36" height="18" rx="9" fill="url(#neonFoil)" stroke="#FFFFFF" stroke-width="1"/>
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#FFFFFF" stroke-width="1.5"/>
        </g>

        <text x="100" y="124" font-size="8" font-weight="bold" fill="#FF007F" text-anchor="middle">CHỨA MA TÚY TỔNG HỢP (MDMA)</text>
      </svg>

      <div class="absolute top-2 right-2 bg-pink-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow animate-pulse">
        ☠️ THUỐC LẮC TRÁ HÌNH
      </div>
    </div>
  `,

  // 5. Safe: Bột cam hòa tan (Fresh chilled orange juice with ice, bubbles, and orange slice)
  orangeJuice: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 p-2 overflow-hidden">
      <!-- Rising fizz bubbles -->
      <span class="absolute bottom-10 left-20 w-2 h-2 rounded-full bg-white/70 animate-bubble-1"></span>
      <span class="absolute bottom-14 left-28 w-3 h-3 rounded-full bg-white/60 animate-bubble-2"></span>
      <span class="absolute bottom-8 left-24 w-2 h-2 rounded-full bg-white/80 animate-bubble-3"></span>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="juiceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFA834"/>
            <stop offset="60%" stop-color="#FF7A00"/>
            <stop offset="100%" stop-color="#E05300"/>
          </linearGradient>
          <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.7)"/>
            <stop offset="30%" stop-color="rgba(255,255,255,0.2)"/>
            <stop offset="70%" stop-color="rgba(255,255,255,0.1)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,0.6)"/>
          </linearGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="142" rx="45" ry="10" fill="rgba(0,0,0,0.15)"/>

        <!-- Orange Juice Glass -->
        <g transform="translate(65, 20)">
          <!-- Glass Outline -->
          <path d="M 12 15 L 18 110 Q 18 118 35 118 Q 52 118 52 110 L 58 15 Z" fill="rgba(240,249,255,0.4)" stroke="#CBD5E1" stroke-width="1.5"/>
          
          <!-- Liquid Inside -->
          <path d="M 14 35 L 18 108 Q 18 115 35 115 Q 52 115 52 108 L 56 35 Q 35 40 14 35 Z" fill="url(#juiceGrad)"/>

          <!-- Ice Cubes inside -->
          <rect x="25" y="45" width="16" height="16" rx="3" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.8)" transform="rotate(15 33 53)"/>
          <rect x="32" y="70" width="14" height="14" rx="3" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" transform="rotate(-10 39 77)"/>

          <!-- Specular reflection line -->
          <path d="M 17 20 L 22 105" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 53 20 L 49 105" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>

          <!-- Straw -->
          <path d="M 28 5 L 22 -15" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>
          <path d="M 28 5 L 35 45" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>
        </g>

        <!-- Fresh Orange Slice on Glass Rim -->
        <g transform="translate(75, 25)">
          <circle cx="0" cy="0" r="22" fill="#FFA500" stroke="#FF7A00" stroke-width="3"/>
          <circle cx="0" cy="0" r="19" fill="#FFFBEB"/>
          <!-- Pulp Segments -->
          <path d="M 0 0 L 15 5 A 16 16 0 0 0 15 -5 Z" fill="#FF8C00"/>
          <path d="M 0 0 L 5 15 A 16 16 0 0 0 -5 15 Z" fill="#FF8C00"/>
          <path d="M 0 0 L -15 5 A 16 16 0 0 0 -15 -5 Z" fill="#FF8C00"/>
          <path d="M 0 0 L -5 -15 A 16 16 0 0 0 5 -15 Z" fill="#FF8C00"/>
        </g>

        <!-- Orange Juice Powder Sachet (Left) -->
        <g transform="translate(125, 60) rotate(12)">
          <rect x="0" y="0" width="36" height="55" rx="4" fill="#FB923C" stroke="#EA580C" stroke-width="1.5"/>
          <text x="18" y="20" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle">BỘT CAM</text>
          <text x="18" y="32" font-size="6" font-weight="bold" fill="#FEF08A" text-anchor="middle">VITAMIN C</text>
          <circle cx="18" cy="42" r="6" fill="#F97316"/>
        </g>
      </svg>

      <div class="absolute bottom-2 left-3 bg-white/90 text-[10px] font-bold text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
        🍊 Nước cam giải khát tự nhiên
      </div>
    </div>
  `,

  // 6. Danger: Nước Vui / Crispy Fruit (Toxic chemical drink with radioactive gradient & skull)
  happyWater: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-fuchsia-950 p-2 overflow-hidden border border-fuchsia-500/30">
      <!-- Hazardous glow animation -->
      <div class="absolute inset-0 bg-fuchsia-600/10 animate-pulse pointer-events-none"></div>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-[0_0_20px_rgba(217,70,239,0.5)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="toxicPouch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00F5FF"/>
            <stop offset="45%" stop-color="#D946EF"/>
            <stop offset="85%" stop-color="#F43F5E"/>
            <stop offset="100%" stop-color="#FFDD00"/>
          </linearGradient>
          <linearGradient id="toxicLiquid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#00F5FF"/>
            <stop offset="100%" stop-color="#A21CAF"/>
          </linearGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="142" rx="60" ry="11" fill="rgba(0,0,0,0.6)"/>

        <!-- Stand-up Pouch Sachet -->
        <g transform="translate(60, 20)">
          <!-- Foil pouch body -->
          <path d="M 12 10 L 68 10 L 74 105 Q 74 115 40 115 Q 6 115 6 105 Z" fill="url(#toxicPouch)" stroke="#FFFFFF" stroke-width="1.8"/>

          <!-- Foil top seal notches -->
          <line x1="6" y1="20" x2="74" y2="20" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="3 2"/>

          <!-- Suspicious Smiley / Hypnotic eyes -->
          <circle cx="40" cy="52" r="16" fill="#FACC15" stroke="#000000" stroke-width="2"/>
          <circle cx="34" cy="48" r="3" fill="#000000"/>
          <circle cx="46" cy="48" r="3" fill="#000000"/>
          <path d="M 32 58 Q 40 68 48 58" stroke="#000000" stroke-width="2.5" fill="none" stroke-linecap="round"/>

          <!-- Psychedelic Typography -->
          <rect x="14" y="74" width="52" height="22" rx="4" fill="#0F172A" stroke="#00F5FF" stroke-width="1.2"/>
          <text x="40" y="85" font-size="8.5" font-weight="900" fill="#00F5FF" text-anchor="middle" letter-spacing="0.5">NƯỚC VUI</text>
          <text x="40" y="93" font-size="6.5" font-weight="extrabold" fill="#F43F5E" text-anchor="middle">CRISPY FRUIT</text>

          <text x="40" y="108" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle">☠️ MA TÚY PHA TRỘN</text>
        </g>

        <!-- Chemical Droplets Spilling out -->
        <circle cx="145" cy="55" r="5" fill="#00F5FF" opacity="0.8"/>
        <circle cx="152" cy="72" r="3" fill="#D946EF" opacity="0.8"/>
        <circle cx="148" cy="90" r="4" fill="#F43F5E" opacity="0.9"/>
      </svg>

      <div class="absolute top-2 right-2 bg-fuchsia-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow animate-pulse">
        ⚠️ NƯỚC VUI GÂY ẢO GIÁC
      </div>
    </div>
  `,

  // 7. Safe: Bút bi & Cục tẩy học đường (Realistic school pen & clean eraser)
  schoolSupplies: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 p-2 overflow-hidden">
      <!-- Animated gleam -->
      <span class="absolute top-4 left-6 text-xl animate-twinkle select-none pointer-events-none">✨</span>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="50%" stop-color="#60A5FA"/>
            <stop offset="100%" stop-color="#1D4ED8"/>
          </linearGradient>
          <linearGradient id="metalClip" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#E2E8F0"/>
            <stop offset="50%" stop-color="#FFFFFF"/>
            <stop offset="100%" stop-color="#94A3B8"/>
          </linearGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="125" rx="65" ry="10" fill="rgba(0,0,0,0.15)"/>

        <!-- Notebook Lined Paper Background -->
        <rect x="35" y="20" width="130" height="110" rx="6" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
        <line x1="35" y1="45" x2="165" y2="45" stroke="#E2E8F0" stroke-width="1"/>
        <line x1="35" y1="70" x2="165" y2="70" stroke="#E2E8F0" stroke-width="1"/>
        <line x1="35" y1="95" x2="165" y2="95" stroke="#E2E8F0" stroke-width="1"/>
        <line x1="55" y1="20" x2="55" y2="130" stroke="#FCA5A5" stroke-width="1.5"/>

        <!-- Blue School Ballpoint Pen (Tilted 35 deg) -->
        <g transform="translate(100, 75) rotate(-35)">
          <!-- Pen Barrel -->
          <rect x="-8" y="-45" width="16" height="90" rx="3" fill="url(#penBody)"/>
          
          <!-- Pen Tip (Chrome Cone & Ball) -->
          <polygon points="-8,45 8,45 0,65" fill="url(#metalClip)"/>
          <circle cx="0" cy="65" r="1.5" fill="#1E3A8A"/>

          <!-- Pen Cap Clip (Chrome) -->
          <rect x="-10" y="-45" width="4" height="40" rx="2" fill="url(#metalClip)"/>
          <circle cx="-8" cy="-8" r="3" fill="url(#metalClip)"/>

          <!-- White Grip stripes -->
          <line x1="-8" y1="25" x2="8" y2="25" stroke="#93C5FD" stroke-width="2"/>
          <line x1="-8" y1="32" x2="8" y2="32" stroke="#93C5FD" stroke-width="2"/>
          <line x1="-8" y1="39" x2="8" y2="39" stroke="#93C5FD" stroke-width="2"/>
        </g>

        <!-- Clean Eraser (Bottom Right) -->
        <g transform="translate(120, 95) rotate(15)">
          <rect x="0" y="0" width="38" height="22" rx="3" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.2"/>
          <rect x="0" y="0" width="22" height="22" rx="2" fill="#3B82F6"/>
          <text x="11" y="14" font-size="7" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4B</text>
        </g>
      </svg>

      <div class="absolute bottom-2 left-3 bg-white/90 text-[10px] font-bold text-blue-900 px-2 py-0.5 rounded-full border border-blue-200">
        ✏️ Đồ dùng học tập an toàn
      </div>
    </div>
  `,

  // 8. Danger: Pod / Vape ngụy trang (Sleek disguised e-cigarette with smoke plumes & LED)
  vape: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 p-2 overflow-hidden border border-red-500/30">
      <!-- Animated Smoke Puff coming out of vape -->
      <div class="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-300/30 blur-md animate-vapor pointer-events-none"></div>
      <div class="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-400/25 blur-lg animate-vapor-delay pointer-events-none"></div>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vapeChassis" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1E293B"/>
            <stop offset="45%" stop-color="#475569"/>
            <stop offset="100%" stop-color="#0F172A"/>
          </linearGradient>
          <radialGradient id="coilGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#FF4500"/>
            <stop offset="70%" stop-color="#EF4444"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="142" rx="40" ry="10" fill="rgba(0,0,0,0.6)"/>

        <!-- Vape Pod Main Body (Disguised as high-tech highlighter/USB) -->
        <g transform="translate(85, 30)">
          <!-- Mouthpiece Tip -->
          <path d="M 8 0 L 22 0 L 26 18 L 4 18 Z" fill="#020617" stroke="#334155" stroke-width="1.5"/>
          <ellipse cx="15" cy="0" rx="7" ry="2.5" fill="#000000"/>

          <!-- Heating Coil Window Indicator -->
          <circle cx="15" cy="28" r="5" fill="url(#coilGlow)"/>
          <circle cx="15" cy="28" r="2.5" fill="#FEE2E2"/>

          <!-- Body -->
          <rect x="0" y="18" width="30" height="88" rx="8" fill="url(#vapeChassis)" stroke="#64748B" stroke-width="1.5"/>

          <!-- Disguised High-Tech Logo & OLED display -->
          <rect x="6" y="44" width="18" height="26" rx="3" fill="#020617" stroke="#38BDF8" stroke-width="1"/>
          <text x="15" y="55" font-size="7" font-weight="900" fill="#38BDF8" text-anchor="middle">5.0V</text>
          <text x="15" y="65" font-size="6" font-weight="bold" fill="#EF4444" text-anchor="middle">CHILL</text>

          <!-- Warning text on pod -->
          <text x="15" y="85" font-size="5" font-weight="extrabold" fill="#94A3B8" text-anchor="middle">VAPE POD</text>
          <text x="15" y="93" font-size="4.5" font-weight="bold" fill="#F87171" text-anchor="middle">TẨM TINH DẦU CẦN SA</text>

          <!-- Bottom USB-C Port -->
          <rect x="9" y="104" width="12" height="3" rx="1.5" fill="#000000"/>
        </g>

        <!-- Disguised Cap (Removed nearby) -->
        <g transform="translate(130, 85) rotate(25)">
          <rect x="0" y="0" width="22" height="30" rx="4" fill="#334155" stroke="#64748B" stroke-width="1.2"/>
          <text x="11" y="18" font-size="6" font-weight="bold" fill="#F8FAFC" text-anchor="middle">CAP</text>
        </g>
      </svg>

      <div class="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow animate-pulse">
        ⚠️ THUỐC LÁ ĐIỆN TỬ NGỤY TRANG
      </div>
    </div>
  `,

  // 9. Safe: Thể thao & Giải trí lành mạnh (Basketball, soccer ball, winner cup, vibrant sports energy)
  healthyJoy: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-2 overflow-hidden">
      <!-- Animated sparkles of vitality -->
      <span class="absolute top-4 right-8 text-xl animate-twinkle select-none pointer-events-none">⭐</span>
      <span class="absolute bottom-6 left-8 text-xl animate-twinkle select-none pointer-events-none" style="animation-delay: 0.8s;">✨</span>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="ballOrange" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#FF9E44"/>
            <stop offset="70%" stop-color="#F97316"/>
            <stop offset="100%" stop-color="#C2410C"/>
          </radialGradient>
          <radialGradient id="trophyGold" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#FEF08A"/>
            <stop offset="50%" stop-color="#EAB308"/>
            <stop offset="100%" stop-color="#A16207"/>
          </radialGradient>
        </defs>

        <!-- Shadow -->
        <ellipse cx="100" cy="140" rx="70" ry="12" fill="rgba(0,0,0,0.15)"/>

        <!-- Golden Trophy Cup in center -->
        <g transform="translate(100, 75)">
          <!-- Trophy Base -->
          <rect x="-18" y="32" width="36" height="12" rx="3" fill="#854D0E" stroke="#583101" stroke-width="1.5"/>
          <polygon points="-12,32 12,32 8,18 -8,18" fill="url(#trophyGold)"/>
          
          <!-- Trophy Cup -->
          <path d="M -22 -18 L 22 -18 Q 24 16 0 22 Q -24 16 -22 -18 Z" fill="url(#trophyGold)" stroke="#78350F" stroke-width="1.5"/>
          
          <!-- Handles -->
          <path d="M -22 -10 Q -34 -4 -20 10" stroke="url(#trophyGold)" stroke-width="3.5" fill="none"/>
          <path d="M 22 -10 Q 34 -4 20 10" stroke="url(#trophyGold)" stroke-width="3.5" fill="none"/>

          <!-- Star Emblem -->
          <text x="0" y="8" font-size="14" fill="#FFFFFF" text-anchor="middle">★</text>
        </g>

        <!-- Basketball (Left) -->
        <g transform="translate(55, 95)">
          <circle cx="0" cy="0" r="28" fill="url(#ballOrange)" stroke="#7C2D12" stroke-width="1.8"/>
          <!-- Basketball Ribs -->
          <path d="M -28 0 L 28 0" stroke="#7C2D12" stroke-width="2"/>
          <path d="M 0 -28 L 0 28" stroke="#7C2D12" stroke-width="2"/>
          <path d="M -20 -20 Q 0 -6 20 -20" stroke="#7C2D12" stroke-width="1.8" fill="none"/>
          <path d="M -20 20 Q 0 6 20 20" stroke="#7C2D12" stroke-width="1.8" fill="none"/>
          <!-- Specular -->
          <ellipse cx="-10" cy="-10" rx="8" ry="4" fill="#FFFFFF" opacity="0.4" transform="rotate(-30 -10 -10)"/>
        </g>

        <!-- Soccer Ball (Right) -->
        <g transform="translate(145, 98)">
          <circle cx="0" cy="0" r="26" fill="#F8FAFC" stroke="#0F172A" stroke-width="1.8"/>
          <!-- Classic Pentagon Patterns -->
          <polygon points="0,-6 6,-1 4,6 -4,6 -6,-1" fill="#0F172A"/>
          <line x1="0" y1="-6" x2="0" y2="-26" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="6" y1="-1" x2="22" y2="-8" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="4" y1="6" x2="16" y2="20" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="-4" y1="6" x2="-16" y2="20" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="-6" y1="-1" x2="-22" y2="-8" stroke="#0F172A" stroke-width="1.8"/>
        </g>
      </svg>

      <div class="absolute bottom-2 left-3 bg-white/90 text-[10px] font-bold text-emerald-900 px-2 py-0.5 rounded-full border border-emerald-300">
        ⚽ Thể dục thể thao lành mạnh
      </div>
    </div>
  `,

  // 10. Danger: Bóng cười / Post Chill (Nitrous oxide balloon floating with sinister vapors)
  laughingGas: `
    <div class="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-950 via-slate-900 to-indigo-950 p-2 overflow-hidden border border-indigo-500/30">
      <!-- Animated hazardous vapor waves -->
      <div class="absolute inset-0 bg-violet-600/10 animate-pulse pointer-events-none"></div>

      <svg viewBox="0 0 200 160" class="w-48 h-36 drop-shadow-[0_0_25px_rgba(139,92,246,0.5)] animate-balloon" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="balloonShader" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stop-color="#67E8F9"/>
            <stop offset="50%" stop-color="#8B5CF6"/>
            <stop offset="90%" stop-color="#4C1D95"/>
            <stop offset="100%" stop-color="#1E1B4B"/>
          </radialGradient>
          <linearGradient id="tankSteel" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#64748B"/>
            <stop offset="50%" stop-color="#E2E8F0"/>
            <stop offset="100%" stop-color="#334155"/>
          </linearGradient>
        </defs>

        <!-- Shadow on ground -->
        <ellipse cx="100" cy="145" rx="50" ry="10" fill="rgba(0,0,0,0.5)"/>

        <!-- Background N2O Gas Canister Cylinder -->
        <g transform="translate(135, 60)">
          <rect x="0" y="10" width="34" height="70" rx="8" fill="url(#tankSteel)" stroke="#94A3B8" stroke-width="1.5"/>
          <rect x="10" y="0" width="14" height="12" rx="3" fill="#E2E8F0"/>
          <text x="17" y="45" font-size="8" font-weight="900" fill="#0F172A" text-anchor="middle" transform="rotate(-90 17 45)">N2O TANK</text>
        </g>

        <!-- Floating Iridescent Party Balloon (Main) -->
        <g transform="translate(85, 20)">
          <!-- Balloon Bulb -->
          <path d="M 0 45 C -35 45 -45 10 -40 -15 C -35 -40 0 -50 0 -50 C 0 -50 35 -40 40 -15 C 45 10 35 45 0 45 Z" fill="url(#balloonShader)" stroke="#A78BFA" stroke-width="1.8" transform="translate(0, 50)"/>
          
          <!-- Specular Glow Highlight -->
          <ellipse cx="-14" cy="70" rx="10" ry="20" fill="#FFFFFF" opacity="0.45" transform="rotate(-25 -14 70)"/>

          <!-- Sinister Laughing Smile / Warning skull print -->
          <text x="0" y="95" font-size="28" fill="#F43F5E" text-anchor="middle" filter="drop-shadow(0 0 4px #000)">☠️</text>
          <text x="0" y="112" font-size="9" font-weight="900" fill="#FACC15" text-anchor="middle">BÓNG CƯỜI</text>

          <!-- Balloon Knot -->
          <polygon points="-6,105 6,105 0,114" fill="#6D28D9"/>

          <!-- Swaying String -->
          <path d="M 0 114 Q -10 126 5 135 T 0 148" stroke="#FFFFFF" stroke-width="1.8" fill="none"/>
        </g>
      </svg>

      <div class="absolute top-2 right-2 bg-purple-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow animate-pulse">
        ☠️ KHÍ N2O GÂY TỔN THƯƠNG NÃO
      </div>
    </div>
  `
};

export const roundsData: Round[] = [
  {
    title: "Vòng 1: Chiếc bánh ngọt ngào",
    desc: "Nhận diện đâu là bánh quy thông thường, đâu là bánh chứa chất cấm?",
    options: [
      {
        id: "r1-cookie",
        isDanger: false,
        img: svgs.cookie,
        text: "Bánh quy sô-cô-la",
        info: "Nhãn mác rõ ràng, thành phần chuẩn mực."
      },
      {
        id: "r1-weedCake",
        isDanger: true,
        img: svgs.weedCake,
        text: "Bánh lười (Lazy Cake)",
        info: "Bao bì sặc sỡ, có hình lá cần sa nhỏ, chữ CBD mập mờ."
      }
    ]
  },
  {
    title: "Vòng 2: Sự cám dỗ từ viên kẹo",
    desc: "Viên kẹo nào ẩn chứa hiểm họa khôn lường?",
    options: [
      {
        id: "r2-gummyBear",
        isDanger: false,
        img: svgs.gummyBear,
        text: "Kẹo dẻo gấu",
        info: "Sản phẩm quen thuộc tại siêu thị."
      },
      {
        id: "r2-funCandy",
        isDanger: true,
        img: svgs.funCandy,
        text: "Kẹo dạ quang / Kẹo Vui",
        info: "Màu sắc chói lọi, logo hình mặt lờ đờ lạ lẫm."
      }
    ]
  },
  {
    title: "Vòng 3: Giải khát hay giải... sầu?",
    desc: "Thức uống nào thực chất là ma túy tổng hợp?",
    options: [
      {
        id: "r3-orangeJuice",
        isDanger: false,
        img: svgs.orangeJuice,
        text: "Bột cam hòa tan",
        info: "Thương hiệu uy tín, thông tin minh bạch."
      },
      {
        id: "r3-happyWater",
        isDanger: true,
        img: svgs.happyWater,
        text: "Nước Vui / Crispy Fruit",
        info: "Không rõ thành phần, bao bì hình mặt cười bắt mắt."
      }
    ]
  },
  {
    title: "Vòng 4: Vỏ bọc công nghệ học đường",
    desc: "Đâu là vật dụng ngụy trang nhắm vào học sinh?",
    options: [
      {
        id: "r4-schoolSupplies",
        isDanger: false,
        img: svgs.schoolSupplies,
        text: "Bút bi & Cục tẩy",
        info: "Đồ dùng học tập truyền thống."
      },
      {
        id: "r4-vape",
        isDanger: true,
        img: svgs.vape,
        text: "Pod / Vape ngụy trang",
        info: "Giấu dưới hình dạng bút, USB, đồ chơi."
      }
    ]
  },
  {
    title: "Vòng 5: Cạm bẫy 'Chill'",
    desc: "Niềm vui nào đang hủy hoại hệ thần kinh?",
    options: [
      {
        id: "r5-healthyJoy",
        isDanger: false,
        img: svgs.healthyJoy,
        text: "Thể thao & Giải trí",
        info: "Tăng cường sức khỏe, sảng khoái tinh thần."
      },
      {
        id: "r5-laughingGas",
        isDanger: true,
        img: svgs.laughingGas,
        text: "Bóng cười / Post Chill",
        info: "Tạo ảo giác, suy giảm trí nhớ, gây nghiện."
      }
    ]
  }
];

export const allBadges: Badge[] = [
  {
    id: "badge-gold",
    name: "Huy Hiệu Vàng: Đại Hiệp Sĩ",
    tier: "gold",
    icon: "🥇",
    color: "from-amber-400 via-yellow-300 to-amber-500",
    borderColor: "border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)]",
    description: "Đạt trên 120 điểm! Bậc thầy nhận diện mọi cạm bẫy ma túy trá hình.",
    requirement: "Điểm số > 120 điểm",
    unlocked: false
  },
  {
    id: "badge-silver",
    name: "Huy Hiệu Bạc: Lá Chắn Tinh Anh",
    tier: "silver",
    icon: "🥈",
    color: "from-slate-200 via-gray-100 to-slate-400",
    borderColor: "border-slate-300 shadow-[0_0_20px_rgba(226,232,240,0.5)]",
    description: "Đạt từ 61 đến 120 điểm! Khả năng quan sát nhạy bén và tinh thần cảnh giác cao.",
    requirement: "Điểm số từ 61 - 120 điểm",
    unlocked: false
  },
  {
    id: "badge-bronze",
    name: "Huy Hiệu Đồng: Chiến Binh Khởi Động",
    tier: "bronze",
    icon: "🥉",
    color: "from-amber-700 via-amber-600 to-amber-800",
    borderColor: "border-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.4)]",
    description: "Đã hoàn thành xuất sắc 5 vòng nhận diện hiểm họa.",
    requirement: "Hoàn thành vòng chơi (≤ 60 điểm)",
    unlocked: false
  },
  {
    id: "badge-perfect",
    name: "Mắt Thần Chuẩn Xác",
    tier: "special",
    icon: "🎯",
    color: "from-emerald-400 via-green-300 to-teal-500",
    borderColor: "border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)]",
    description: "Phát hiện chính xác tuyệt đối 5/5 vòng không sai một lần nào!",
    requirement: "Trả lời đúng 5/5 vòng",
    unlocked: false
  },
  {
    id: "badge-speed",
    name: "Tia Chớp Phản Xạ",
    tier: "special",
    icon: "⚡",
    color: "from-cyan-400 via-sky-300 to-blue-500",
    borderColor: "border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]",
    description: "Nhận diện hiểm họa thần tốc trong vòng dưới 3 giây!",
    requirement: "Thời gian trả lời còn lại ≥ 8s",
    unlocked: false
  }
];
