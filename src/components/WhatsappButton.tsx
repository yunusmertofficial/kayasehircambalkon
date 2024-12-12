import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center group">
      <Link href="https://wa.me/905365608595" passHref aria-label="WhatsApp">
        <div className="flex items-center space-x-2">
          {/* Hover ile Yazı */}
          <span className="group-hover:block hidden bg-green-500 text-white px-5 py-3 rounded-full shadow-lg whitespace-nowrap text-lg">
            WhatsApp Destek
          </span>

          {/* WhatsApp İkonu */}
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
            <FaWhatsapp size={28} />
          </div>
        </div>
      </Link>
    </div>
  );
}
