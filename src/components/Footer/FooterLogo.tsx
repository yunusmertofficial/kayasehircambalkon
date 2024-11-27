import Link from "next/link";
import React from "react";
import Image from "next/image";

export const FooterLogo = () => {
  return (
    <div className="col-span-full lg:col-span-2 mb-10 lg:mb-0">
      <Link
        href="https://kayasehircambalkon.com"
        className="flex justify-center lg:justify-start"
      >
        <Image src="/logo.webp" alt="logo" width={250} height={73} priority />
      </Link>
      <p className="py-8 text-sm text-secondary-foreground lg:max-w-xs text-center lg:text-left">
        {
          "Türkiye'nin her yerinde kaliteli cam balkon çözümleri sunuyoruz. Herhangi bir sorunuz var mı?"
        }
      </p>
      <div className="flex justify-center lg:justify-start">
        <Link
          href="/iletisim"
          className="py-2.5 px-5 h-9 bg-primary text-primary-foreground rounded-full text-xs mx-auto lg:mx-0 shadow hover:bg-secondary-foreground transition-all"
        >
          İletişime Geçin
        </Link>
      </div>
    </div>
  );
};
