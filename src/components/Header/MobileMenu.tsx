"use client";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { links } from "@/utils/data";

type Props = {
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: (open: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
};

const animationVariants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: "0%", opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const subMenuVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: "0%", opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

const listVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.4 } },
};

const titleVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4 } },
};

const MobileMenu: React.FC<Props> = ({
  isSubMenuOpen,
  setIsSubMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <Dialog open={true} onClose={handleCloseMenu} className="relative z-50">
      <div className="fixed inset-0 flex bg-gray-800 bg-opacity-75">
        {/* Sol taraftaki menü */}
        <motion.div
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-4/5 h-full bg-background p-8"
        >
          {isSubMenuOpen ? (
            <motion.div
              variants={subMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <SubMenu
                handleCloseMenu={handleCloseMenu}
                setIsSubMenuOpen={setIsSubMenuOpen}
              />
            </motion.div>
          ) : (
            <motion.div
              variants={listVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MainMenu
                handleCloseMenu={handleCloseMenu}
                setIsSubMenuOpen={setIsSubMenuOpen}
              />
            </motion.div>
          )}
        </motion.div>

        <div className="flex-1" onClick={handleCloseMenu} />
      </div>
    </Dialog>
  );
};

const MainMenu: React.FC<{
  handleCloseMenu: () => void;
  setIsSubMenuOpen: (open: boolean) => void;
}> = ({ handleCloseMenu, setIsSubMenuOpen }) => (
  <>
    <motion.div
      className="text-2xl font-bold flex justify-between items-center"
      variants={titleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <span>Menü</span>
      <button
        onClick={handleCloseMenu}
        className="text-secondary-foreground"
        aria-label="Menüyü Kapat"
      >
        <IoClose size={30} />
      </button>
    </motion.div>
    <br />
    <hr />
    <motion.ul
      className="mt-8 space-y-6"
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {links.map((link) =>
        link.dropdown.length > 0 ? (
          <li key={link.id} className="flex justify-between items-center">
            <Link
              href={link.href || ""}
              className="text-secondary-foreground hover:text-primary"
              onClick={handleCloseMenu}
            >
              {link.label}
            </Link>
            <div
              className="cursor-pointer"
              onClick={() => setIsSubMenuOpen(true)}
            >
              <FaChevronRight />
            </div>
          </li>
        ) : (
          <li key={link.id}>
            <Link
              href={link.href || ""}
              className="text-secondary-foreground hover:text-primary"
              onClick={handleCloseMenu}
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </motion.ul>
  </>
);

const SubMenu: React.FC<{
  handleCloseMenu: () => void;
  setIsSubMenuOpen: (open: boolean) => void;
}> = ({ handleCloseMenu, setIsSubMenuOpen }) => (
  <>
    <motion.div
      className="flex justify-between items-center text-xl"
      variants={titleVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex items-center">
        <button
          onClick={() => setIsSubMenuOpen(false)}
          className="text-secondary-foreground flex items-center"
          aria-label="Ana Menüye Geri Dön"
        >
          <FaChevronLeft className="mr-2" />
        </button>
        <div>Hizmetlerimiz</div>
      </div>
      <button
        onClick={handleCloseMenu}
        className="text-secondary-foreground"
        aria-label="Menüyü Kapat"
      >
        <IoClose size={30} />
      </button>
    </motion.div>
    <br />
    <hr />
    <motion.ul
      className="mt-8 space-y-6"
      variants={listVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {links[2].dropdown?.map((dropdownItem, idx) => (
        <li key={idx}>
          <Link
            href={dropdownItem.href}
            className="text-secondary-foreground hover:text-primary"
            onClick={handleCloseMenu}
          >
            {dropdownItem.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  </>
);

export default MobileMenu;
