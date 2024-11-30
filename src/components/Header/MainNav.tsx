"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown } from "react-icons/fa";
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
  const dropdownVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="flex justify-center items-center h-20 bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="logo"
              width={250}
              height={73}
              placeholder="blur"
              blurDataURL={"/logo.webp"}
            />
          </Link>
        </div>

        {/* Main Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8 relative">
            {links.map((link) =>
              link.dropdown.length > 0 ? (
                <li
                  key={link.id}
                  className="relative group text-gray-700 hover:text-primary"
                >
                  <div className="flex items-center relative">
                    <Link
                      href={link.href}
                      className={`capitalize relative ${
                        activeUrl === link.href
                          ? "text-primary font-bold"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                      {/* Alt çizgi */}
                      <motion.div
                        className="absolute bottom-[-3px] left-0 h-[2px] bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        animate={{
                          width: activeUrl === link.href ? "100%" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                    <FaChevronDown className="ml-1" />
                  </div>

                  {/* Dropdown Menü */}
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute hidden group-hover:flex flex-col bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 origin-top"
                  >
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
                  </motion.ul>
                </li>
              ) : (
                <li
                  key={link.id}
                  className={`capitalize relative ${
                    activeUrl === link.href
                      ? "text-primary font-bold"
                      : "text-gray-700"
                  } hover:text-primary`}
                >
                  <Link href={link.href}>
                    {link.label}
                    {/* Alt çizgi */}
                    <motion.div
                      className="absolute bottom-[-3px] left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      animate={{
                        width: activeUrl === link.href ? "100%" : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700"
            aria-label="Mobile Menu"
            whileTap={{ scale: 0.9 }}
          >
            <FaBars size={30} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
