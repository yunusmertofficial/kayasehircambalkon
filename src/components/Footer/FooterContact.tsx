import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export const FooterContact = () => {
  return (
    <div>
      <div className="text-lg font-semibold text-foreground mb-2">İletişim</div>
      <hr />
      <br />
      <ul className="text-sm space-y-4">
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="text-primary" />
          <Link
            href="tel:+905365608595"
            className="hover:text-primary transition-all"
            aria-label="Telefon"
          >
            +90 536 560 8595
          </Link>
        </li>
        <li className="flex mt-4 space-x-4">
          <Link
            href="https://facebook.com"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-foreground" />
          </Link>
          <Link
            href="https://instagram.com"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="Instagram"
          >
            <FaInstagram className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-foreground" />
          </Link>
          <Link
            href="https://wa.me"
            className="w-9 h-9 bg-muted flex justify-center items-center rounded-full hover:bg-primary transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-foreground" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
