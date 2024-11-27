import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export const FooterContact = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-foreground mb-2">İletişim</h4>
      <hr />
      <br />
      <ul className="text-sm space-y-4">
        <li className="flex items-center space-x-2">
          <FaPhoneAlt className="text-primary" />
          <Link
            href="tel:+905555555555"
            className="hover:text-primary transition-all"
          >
            +90 555 555 5555
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaEnvelope className="text-primary" />
          <Link
            href="mailto:kayasehircambalkon@gmail.com"
            className="hover:text-primary transition-all"
          >
            kayasehircambalkon@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
};
