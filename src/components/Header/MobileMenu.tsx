"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/data";

const MobileMenu: React.FC<{
  onCloseMenu: () => void;
}> = ({ onCloseMenu }) => {
  const [openMegaCategories, setOpenMegaCategories] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleMegaCategory = (label: string) => {
    setOpenMegaCategories((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const isItemActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Dialog open={true} onClose={onCloseMenu} className="relative z-50">
      <div className="fixed inset-0 flex bg-gray-800 bg-opacity-75">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-4/5 h-full bg-background p-6 overflow-auto shadow-lg"
        >
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Menü</span>
            <button onClick={onCloseMenu} className="text-secondary-foreground">
              ✕
            </button>
          </div>
          <hr className="my-4 border-secondary-foreground" />

          <ul className="space-y-4">
            {links.map((link) =>
              link.type === "mega" ? (
                <li key={link.id} className="space-y-2">
                  <div
                    className={`flex justify-between items-center cursor-pointer text-lg font-bold ${
                      pathname.startsWith(link.href)
                        ? "text-primary" // Seçili durumda güçlü vurgu
                        : "text-secondary-foreground hover:text-gray-500" // Hover için açık gri renk
                    }`}
                  >
                    <Link href={link.href}>
                      <span>{link.label}</span>
                    </Link>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{
                        rotate: openMegaCategories.includes(link.label)
                          ? 180
                          : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-base"
                    >
                      {openMegaCategories.includes(link.label) ? (
                        <FaMinus
                          onClick={() => toggleMegaCategory(link.label)}
                        />
                      ) : (
                        <FaPlus
                          onClick={() => toggleMegaCategory(link.label)}
                        />
                      )}
                    </motion.div>
                  </div>
                  {openMegaCategories.includes(link.label) && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="mt-3 space-y-2 ml-4"
                    >
                      {link.dropdown?.map((category, idx) => (
                        <li key={idx} className="space-y-1">
                          <div
                            onClick={() => toggleMegaCategory(category.label)}
                            className={`flex justify-between items-center cursor-pointer text-base font-semibold ${
                              category.dropdown?.some((item) =>
                                isItemActive(item.href)
                              )
                                ? "text-primary"
                                : "text-secondary-foreground hover:text-gray-500"
                            }`}
                          >
                            <span>{category.label}</span>
                            <motion.div
                              initial={{ rotate: 0 }}
                              animate={{
                                rotate: openMegaCategories.includes(
                                  category.label
                                )
                                  ? 180
                                  : 0,
                              }}
                              transition={{ duration: 0.4 }}
                              className="text-sm"
                            >
                              {openMegaCategories.includes(category.label) ? (
                                <FaMinus />
                              ) : (
                                <FaPlus />
                              )}
                            </motion.div>
                          </div>
                          {openMegaCategories.includes(category.label) && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="mt-2 ml-4 space-y-1"
                            >
                              {category.dropdown?.map((item, subIdx) => (
                                <li key={subIdx}>
                                  <Link
                                    href={item.href}
                                    className={`block text-sm ${
                                      isItemActive(item.href)
                                        ? "text-primary"
                                        : "text-secondary-foreground hover:text-gray-500"
                                    }`}
                                    onClick={onCloseMenu}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ) : (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`block text-lg font-bold ${
                      isItemActive(link.href)
                        ? "text-primary"
                        : "text-secondary-foreground hover:text-gray-500"
                    }`}
                    onClick={onCloseMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>
        <div className="flex-1" onClick={onCloseMenu} />
      </div>
    </Dialog>
  );
};

export default MobileMenu;
