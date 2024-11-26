import { links } from "@/utils/data";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Props = {
  isSubMenuOpen: boolean;
  setIsSubMenuOpen: (open: boolean) => void;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeUrl: string;
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

  const handleMenuClick = (e: React.MouseEvent) => {
    // Prevent closing when clicking inside the menu
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 block md:hidden"
      onClick={handleCloseMenu} // Close menu when clicking outside
    >
      <div
        className="absolute top-0 left-0 w-4/5 h-full bg-white p-8"
        onClick={handleMenuClick} // Prevent closing on menu clicks
      >
        {isSubMenuOpen ? (
          <>
            <div className="flex justify-between items-center text-xl">
              <button
                onClick={() => setIsSubMenuOpen(false)}
                className="text-gray-700 flex items-center"
              >
                <FaChevronLeft className="mr-2" />
                <span>Hizmetlerimiz</span>
              </button>
              <button
                onClick={() => handleCloseMenu()}
                className="text-gray-700"
              >
                <IoClose size={30} />
              </button>
            </div>
            <br />
            <hr />

            <ul className="mt-8 space-y-6">
              {links[2].dropdown?.map((dropdownItem, idx) => (
                <li key={idx}>
                  <Link
                    href={dropdownItem.href}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={handleCloseMenu}
                  >
                    {dropdownItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="text-2xl font-bold flex justify-between items-center">
              <span>Menü</span>
              <button
                onClick={() => handleCloseMenu()}
                className="text-gray-700"
              >
                <IoClose size={30} />
              </button>
            </div>
            <br />
            <hr />
            <ul className="mt-8 space-y-6">
              {links.map((link) =>
                link.dropdown.length > 0 ? (
                  <li
                    key={link.id}
                    className="flex justify-between items-center"
                  >
                    <Link
                      href={link.href || ""}
                      className="text-gray-700 hover:text-blue-600"
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
                      className="text-gray-700 hover:text-blue-600"
                      onClick={handleCloseMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
