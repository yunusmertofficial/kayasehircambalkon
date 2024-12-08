"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBars, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/utils/data";
import { FiArrowRight } from "react-icons/fi";
import { usePathname } from "next/navigation";

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const MainNav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const pathname = usePathname(); // Aktif URL'i almak için
  const isItemActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex justify-center items-center h-20 bg-gray-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-8">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image src="/logo.webp" alt="logo" width={250} height={73} />
          </Link>
        </div>

        {/* Main Nav Links */}
        <div className="hidden md:flex items-center space-x-6 relative">
          <ul className="flex space-x-8">
            {links.map((link) =>
              link.dropdown &&
              link.dropdown.length > 0 &&
              link.type === "mega" ? (
                <li key={link.id} className="capitalize group">
                  <div
                    className={`relative flex items-center ${
                      pathname.startsWith(link.href) ||
                      link.dropdown.some((category) =>
                        category.dropdown.some((item) =>
                          pathname.startsWith(item.href)
                        )
                      )
                        ? "text-primary font-bold"
                        : "text-gray-700"
                    } hover:text-gray-500`}
                  >
                    <Link href={link.href}>{link.label}</Link>
                    <motion.div
                      className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      animate={{
                        width:
                          pathname.startsWith(link.href) ||
                          link.dropdown.some((category) =>
                            category.dropdown.some((item) =>
                              pathname.startsWith(item.href)
                            )
                          )
                            ? "100%"
                            : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <FaChevronDown className="ml-1" />
                  </div>
                  <div className="absolute left-0 w-full z-10 group-hover:block hidden transition-all duration-300 ease-in-out">
                    <div className="mt-7"></div>
                    <div className="grid grid-cols-3 gap-8 p-8 bg-background shadow-xl">
                      {link.dropdown.map((dropdownCategory, idx) => (
                        <div key={idx} className="space-y-4">
                          <h6 className="text-lg font-semibold text-primary">
                            {dropdownCategory.label}
                          </h6>
                          <hr className="border-gray-300 my-2" />
                          <ul className="space-y-3">
                            {dropdownCategory.dropdown.map(
                              (dropdownItem, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="flex items-center space-x-2 hover:pl-2 transition-all duration-200"
                                >
                                  <FiArrowRight className="text-primary" />
                                  <Link
                                    href={dropdownItem.href}
                                    className={`block text-sm ${
                                      isItemActive(dropdownItem.href)
                                        ? "text-primary"
                                        : "text-gray-700 hover:text-gray-500"
                                    }`}
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li
                  key={link.id}
                  className={`capitalize ${
                    pathname === link.href
                      ? "text-primary font-bold"
                      : "text-gray-700 hover:text-gray-500"
                  }`}
                >
                  <Link href={link.href} className="relative">
                    {link.label}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      animate={{
                        width: isItemActive(link.href) ? "100%" : 0,
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
