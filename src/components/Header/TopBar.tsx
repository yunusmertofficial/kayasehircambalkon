import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

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
            <span>kayasehircambalkon@gmail.com</span>
          </span>
          <span className="flex items-center space-x-1">
            <MdLocationOn className="text-gray-600" />
            <span>İstanbul / Başakşehir / Kayaşehir, Türkiye</span>
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <FaFacebook className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-pink-600 cursor-pointer" />
          <FaGoogle className="text-gray-600 hover:text-red-600 cursor-pointer" />
          <FaYoutube className="text-gray-600 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
