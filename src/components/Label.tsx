import { cx } from "@/utils/cx";
import { Color } from "@/utils/types";
import React from "react";

// Renklerin tipini tanımla

interface LabelProps {
  color?: Color; // opsiyonel bir renk
  pill?: boolean; // pill style'ı
  nomargin?: boolean; // margin yoksa
  children: React.ReactNode; // içeriği almak için
}

export default function Label({
  pill = false, // Varsayılan olarak pill false
  nomargin = false, // Varsayılan olarak margin var
  children,
}: LabelProps) {
  // Eğer pill aktifse, farklı stil uygulanır
  if (pill) {
    return (
      <div className="inline-flex h-6 mt-5 shrink-0 items-center justify-center rounded-full bg-blue-50 px-2 text-sm font-bold text-primary dark:bg-gray-800 dark:text-gray-300">
        {children}
      </div>
    );
  }

  return (
    <span
      className={cx(
        "inline-block text-xs font-medium uppercase tracking-wider text-primary",
        !nomargin && "mt-5" // margin eklemediyse
      )}
    >
      {children}
    </span>
  );
}
