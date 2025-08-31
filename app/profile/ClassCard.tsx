// components/ClassCard.tsx
"use client";
import React from "react";

type Props = {
  value: 1 | 2 | 3 |4; // 1=¼, 2=½, 3=¾
  title?: string;
};

export default function ClassCard({ value, title = "Sınıf" }: Props) {
  // 1->25%, 2->50%, 3->75%
  const percent = (value / 4) * 100;

  // SVG ölçüleri
  const size = 96;              // px
  const stroke = 10;            // kalınlık
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;    // çevre
  const dash = (percent / 100) * c;

  return (
    <div className="w-[140px] h-[160px] rounded-2xl bg-[#BFA9FF] flex flex-col items-center justify-center shadow-sm">
      <div className="text-white/95 text-sm font-semibold -mt-1">{title}</div>

      <div className="relative mt-2" style={{ width: size, height: size }}>
        {/* Arka plan halkası */}
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={stroke}
            fill="none"
          />
          {/* İlerleme halkası */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="#5B7CFA"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${c - dash}`}
            fill="none"
            style={{ transition: "stroke-dasharray 400ms ease" }}
          />
        </svg>

        {/* İç sayı */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-white text-3xl font-semibold">{value}</span>
        </div>
      </div>
    </div>
  );
}