import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const FooterSocials = () => {
  return (
    <div className="flex mt-4 space-x-4">
      <a
        href="https://facebook.com"
        className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-foreground" />
      </a>
      <a
        href="https://instagram.com"
        className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
        aria-label="Instagram"
      >
        <FaInstagram className="text-foreground" />
      </a>
      <a
        href="https://linkedin.com"
        className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="text-foreground" />
      </a>
      <a
        href="https://wa.me"
        className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-foreground" />
      </a>
    </div>
  );
};
