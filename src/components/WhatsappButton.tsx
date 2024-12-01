import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center group">
      <Link href="https://wa.me/905365608595" passHref>
        <div className="flex items-center space-x-2">
          {/* Yazı */}
          <span className="bg-green-500 text-white px-5 py-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-lg">
            WhatsApp Destek
          </span>

          {/* WhatsApp İkonu */}
          <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer">
            <FaWhatsapp size={32} />
          </div>
        </div>
      </Link>
    </div>
  );
}
