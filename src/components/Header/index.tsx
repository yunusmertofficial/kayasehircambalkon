"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import { useSelectedLayoutSegment } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const activeUrl = `/${segment || ""}`;

  return (
    <>
      <div className="w-full z-50 bg-white shadow-md">
        <TopBar />
      </div>
      <nav
        aria-label="Ana Menü"
        className="sticky top-0 z-20 bg-white shadow-md"
      >
        <MainNav
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeUrl={activeUrl}
        />
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              isSubMenuOpen={isSubMenuOpen}
              setIsSubMenuOpen={setIsSubMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
