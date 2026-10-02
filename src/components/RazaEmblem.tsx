import React from 'react';

interface RazaEmblemProps {
  className?: string;
  size?: number;
  showText?: boolean;
  inverted?: boolean;
  withBadge?: boolean;
}

/**
 * Official Calligraphic Dome Emblem of Idara Tehqeeqat-e-Imam Ahmed Raza (ITIAR).
 * Inscribed with Surah An-Nur, Verse 36:
 * "فِي بُيُوتٍ أَذِنَ اللَّهُ أَنْ تُرْفَعَ وَيُذْكَرَ فِيهَا اسْمُهُ"
 * (In houses which Allah has permitted to be raised and that His name be mentioned therein)
 */
export const RazaEmblem: React.FC<RazaEmblemProps> = ({
  className = '',
  size = 48,
  showText = false,
  inverted = false,
  withBadge = false
}) => {
  // Height proportional to ~500:680 aspect ratio
  const emblemWidth = size;
  const emblemHeight = Math.round(size * 1.34);
  const primaryColor = inverted ? '#ffffff' : '#288a61';
  const cutoutColor = inverted ? '#191919' : '#ffffff';

  const emblemSvg = (
    <svg
      width={emblemWidth}
      height={emblemHeight}
      viewBox="0 0 500 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 select-none transition-transform group-hover:scale-105 duration-200"
      aria-label="Official Emblem of Idara-e-Tahqeeqat-e-Imam Ahmed Raza"
    >
      <g fill={primaryColor}>
        {/* Top Minaret Spire & Crescent Finial */}
        <path d="M250 14 L252 50 L248 50 Z" />
        <circle cx="250" cy="55" r="4.5" />
        <path d="M246 54 C246 48 254 48 254 54 C252 52 248 52 246 54 Z" />
        <circle cx="250" cy="68" r="6.5" />
        <circle cx="250" cy="82" r="8.5" />
        <path d="M240 94 L260 94 L256 86 L244 86 Z" />

        {/* Minaret Dome Cap & Balcony */}
        <path d="M236 112 C236 96 264 96 264 112 L268 116 L232 116 Z" />
        <rect x="238" y="116" width="24" height="22" rx="2" />
        <rect x="232" y="138" width="36" height="8" rx="2" />

        {/* Main Dome Arch ("Allahu" & "An Turfa'a") */}
        <path d="M250 150 C290 150 350 170 388 220 C426 270 435 330 435 390 L435 440 L400 440 L400 390 C400 340 380 295 348 255 C316 215 280 200 250 200 C220 200 184 215 152 255 C120 295 100 340 100 390 L100 440 L65 440 L65 390 C65 330 74 270 112 220 C150 170 210 150 250 150 Z" />

        {/* Central Vertical Pillar of "Allahu" */}
        <rect x="237" y="150" width="26" height="180" rx="3" />

        {/* Left Inner Arch of "Allahu" */}
        <path d="M165 240 C190 205 220 185 237 180 L237 215 C215 225 195 245 180 270 C160 305 150 345 150 390 L115 390 C115 335 130 285 165 240 Z" />

        {/* Right Inner Arch of "Allahu" */}
        <path d="M335 240 C370 285 385 335 385 390 L350 390 C350 345 340 305 320 270 C305 245 285 225 263 215 L263 180 C280 185 310 205 335 240 Z" />

        {/* Middle Dividing Line */}
        <path d="M65 440 L435 440 L435 456 L65 456 Z" />

        {/* Mid Section Calligraphy: "Adhina" & "Yudhkara" */}
        <path d="M72 468 L190 468 L190 535 L125 535 C95 535 75 515 72 468 Z" />
        <path d="M85 480 L175 480 L175 522 L125 522 C105 522 92 510 85 480 Z" fill={cutoutColor} />

        {/* Decorative Crescent Curve in Center ("وَيُذْكَرَ") */}
        <path d="M205 460 C205 460 200 525 260 525 C310 525 320 480 320 460 C308 490 280 508 255 508 C225 508 220 475 220 460 Z" />

        {/* Central Shaddah Motif & Tashkeel Diamond */}
        <path d="M232 468 C232 460 236 456 240 456 C244 456 247 460 248 468 C249 460 252 456 256 456 C260 456 264 460 264 468 L268 468 C268 456 260 448 248 448 C236 448 228 456 228 468 Z" />
        <polygon points="268,485 275,477 282,485 275,493" />

        {/* Right Calligraphic Arch */}
        <path d="M305 460 L400 460 C425 460 432 485 432 520 L402 520 C402 490 395 480 375 480 L320 480 C312 470 308 464 305 460 Z" />
        <path d="M395 500 C395 515 425 540 432 575 C434 585 435 600 430 610 C420 626 390 626 370 626 L350 626 C365 605 385 585 390 565 C395 545 385 525 365 520 L375 500 Z" />

        {/* Bottom Tier: "فِي بُيُوتٍ" */}
        <path d="M65 550 L210 550 L210 590 L160 590 C130 590 100 580 85 565 L65 575 C75 595 105 608 145 608 L210 608 L210 626 L65 626 Z" />
        <path d="M65 550 C65 530 85 520 105 520 C125 520 140 535 140 550 L65 550 Z" />
        <circle cx="105" cy="535" r="5" fill={cutoutColor} />

        {/* Vertical Stems of Buyutin */}
        <rect x="215" y="535" width="22" height="91" rx="2" />
        <rect x="247" y="555" width="20" height="71" rx="2" />
        <rect x="277" y="535" width="22" height="91" rx="2" />
        <rect x="309" y="555" width="22" height="71" rx="2" />

        {/* Base Notches (Architectural Kufic Footings) */}
        <rect x="112" y="632" width="20" height="16" rx="2" />
        <rect x="175" y="632" width="24" height="16" rx="2" />
        <rect x="240" y="632" width="24" height="16" rx="2" />
        <rect x="308" y="632" width="24" height="16" rx="2" />
        <rect x="380" y="632" width="24" height="16" rx="2" />
      </g>
    </svg>
  );

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {withBadge ? (
        <div className={`p-2 rounded flex items-center justify-center shrink-0 ${
          inverted 
            ? 'bg-[#191919] border border-[#333333]' 
            : 'bg-[#f4f4f5] border border-[#eaeaec]'
        }`}>
          {emblemSvg}
        </div>
      ) : (
        emblemSvg
      )}

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-heading font-bold text-base md:text-lg tracking-tight leading-tight ${
            inverted ? 'text-white' : 'text-[#020404]'
          }`}>
            Idara-e-Tahqeeqat-e-Imam Ahmed Raza
          </span>
          <span className={`text-[11px] font-semibold tracking-wider uppercase font-sans ${
            inverted ? 'text-[#a0876e]' : 'text-[#288a61]'
          }`}>
            International Research Academy · Est. 1980
          </span>
        </div>
      )}
    </div>
  );
};
