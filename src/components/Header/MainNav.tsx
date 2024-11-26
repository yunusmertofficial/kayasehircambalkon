import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { links } from "@/utils/data";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeUrl: string;
};

const MainNav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeUrl,
}) => {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={250} height={73} />
          </Link>
        </div>

        {/* Main Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {links.map((link) =>
              link.dropdown.length > 0 ? (
                <li
                  key={link.id}
                  className="relative group text-gray-900 hover:text-blue-600"
                >
                  <button
                    className={`flex items-center capitalize ${
                      activeUrl === link.href
                        ? "text-blue-600 font-bold"
                        : "text-gray-900"
                    } hover:text-blue-600`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                    <svg
                      className="w-2.5 h-2.5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <ul className="absolute hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    {link.dropdown.map((dropdownItem, idx) => (
                      <li key={idx}>
                        <Link
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={link.id}
                  className={`capitalize ${
                    activeUrl === link.href
                      ? "text-blue-600 font-bold"
                      : "text-gray-900"
                  } hover:text-blue-600`}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700"
          >
            <FaBars size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
