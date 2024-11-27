import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterLinks } from "./FooterLinks";
import { FooterSocials } from "./FooterSocials";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          <FooterLogo />
          <FooterLinks />
        </div>
        <div className="py-7 border-t border-border mt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <span className="text-sm text-secondary-foreground">
              ©
              <a
                href="https://kayasehircambalkon.com"
                className="hover:text-primary"
              >
                Kayaşehir Cam Balkon
              </a>{" "}
              2024. Tüm hakları saklıdır.
            </span>
            <FooterSocials />
          </div>
        </div>
      </div>
    </footer>
  );
}
