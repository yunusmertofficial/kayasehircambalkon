"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="w-full z-50 bg-white shadow-md">
        <TopBar />
      </div>
      <nav
        aria-label="Ana Menü"
        className="sticky top-0 z-50 bg-white shadow-md"
      >
        <MainNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <AnimatePresence>
          {isMobileMenuOpen && <MobileMenu onCloseMenu={handleCloseMenu} />}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
