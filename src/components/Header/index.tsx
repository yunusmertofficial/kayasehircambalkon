"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const segment = useSelectedLayoutSegment();
  const activeUrl = `/${segment || ""}`;

  return (
    <header>
      <div className="w-full fixed z-50 bg-white shadow-md">
        <TopBar />
        <nav aria-label="Ana Menü">
          <MainNav
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeUrl={activeUrl}
          />
          {isMobileMenuOpen && (
            <MobileMenu
              isSubMenuOpen={isSubMenuOpen}
              setIsSubMenuOpen={setIsSubMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              activeUrl={activeUrl}
            />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
