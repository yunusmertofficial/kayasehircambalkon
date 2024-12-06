import { cx } from "@/utils/cx";
import { ReactNode } from "react";

// Container bileşeni props tipini tanımla
interface ContainerProps {
  children: ReactNode; // İçerik, herhangi bir JSX öğesi olabilir
  className?: string; // Opsiyonel, ek sınıf adı
  large?: boolean; // Opsiyonel, büyük boyut için flag
  alt?: boolean; // Opsiyonel, alt stil için flag
}

export default function Container({
  children,
  className = "", // className varsayılan olarak boş
}: ContainerProps) {
  return (
    <div
      className={cx(
        "container px-8 mx-auto xl:px-5 max-w-screen-xl",
        className // ek className varsa, onu da ekle
      )}
    >
      {children}
    </div>
  );
}
