import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cx } from "@/utils/cx"; // cx yardımcı fonksiyonunu doğru yerden import edin

interface ButtonLinkProps {
  href: string;
  text: string;
  additionalClass?: string; // Opsiyonel olarak ekstra class eklemek için
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  text,
  additionalClass,
}) => {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary-foreground hover:text-primary transition-all group",
        additionalClass // Eğer ekstra bir class varsa ekle
      )}
      aria-label={text}
    >
      {text}
      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
};

export default ButtonLink;
