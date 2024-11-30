import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { Copyright } from "./Copyright";

export default function Footer() {
  return (
    <footer className="w-full bg-accent pt-10">
      <div className="container mx-auto px-3 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          <FooterLogo />
          <FooterLinks />
          <FooterContact />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
