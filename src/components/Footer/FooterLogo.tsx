import React from "react";

export const FooterLogo = () => {
  return (
    <div className="col-span-full lg:col-span-2 mb-10 lg:mb-0">
      <a
        href="https://kayasehircambalkon.com"
        className="flex justify-center lg:justify-start"
      >
        <div className="text-3xl font-bold text-primary">
          Kayaşehir Cam Balkon
        </div>
      </a>
      <p className="py-8 text-sm text-secondary-foreground lg:max-w-xs text-center lg:text-left">
        {
          "Türkiye'nin her yerinde kaliteli cam balkon çözümleri sunuyoruz. Herhangi bir sorunuz var mı?"
        }
      </p>
      <a
        href="/iletisim"
        className="py-2.5 px-5 h-9 bg-primary text-primary-foreground rounded-full text-xs text-white mx-auto lg:mx-0 shadow hover:bg-primary-foreground transition-all"
      >
        İletişime Geçin
      </a>
    </div>
  );
};
