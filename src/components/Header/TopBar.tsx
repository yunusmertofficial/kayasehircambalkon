import Link from "next/link";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { SiGmail } from "react-icons/si";

const TopBar: React.FC = () => {
  return (
    <div className="hidden md:block bg-gray-100">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-2 text-sm text-gray-700">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <MdPhone className="text-gray-600" />
            <span>+90 536 560 8595</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdEmail className="text-gray-600" />
            <span>cambalkonkayasehir@gmail.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdLocationOn className="text-gray-600" />
            <span>İstanbul / Başakşehir / Kayaşehir, Türkiye</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            href="https://www.instagram.com/kayasehircambalkon/"
            aria-label="Instagram"
          >
            <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
          </Link>
          <Link href="mailto:cambalkonkayasehir@gmail.com" aria-label="Gmail">
            <SiGmail className="text-gray-600 hover:text-red-600 cursor-pointer" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC3qqkhOpd8YYLrlacBT6Exw"
            aria-label="Youtube"
          >
            <FaYoutube className="text-gray-600 hover:text-red-500 cursor-pointer" />
          </Link>
          <Link href="https://wa.me/905365608595" aria-label="Whatsapp">
            <FaWhatsapp className="text-gray-600 hover:text-green-500 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
