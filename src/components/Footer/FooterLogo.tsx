import Link from "next/link";
import React from "react";
import Image from "next/image";
import ButtonLink from "../ButtonLink";

export const FooterLogo = () => {
  return (
    <div className="col-span-full lg:col-span-2 mb-10 lg:mb-0">
      <Link
        href="/"
        className="flex justify-center lg:justify-start"
        passHref
        aria-label="Ana Sayfa"
      >
        <Image src="/logo.webp" alt="logo" width={250} height={73} />
      </Link>
      <p className="py-8 text-sm text-secondary-foreground lg:max-w-xs text-center lg:text-left">
        {
          "Türkiye'nin her yerinde kaliteli cam balkon çözümleri sunuyoruz. Herhangi bir sorunuz var mı?"
        }
      </p>
      <div className="flex justify-center lg:justify-start">
        <ButtonLink
          href="/iletisim"
          text="İletişime Geçin"
          additionalClass="text-sm mx-auto lg:mx-0 "
        />
      </div>
    </div>
  );
};
