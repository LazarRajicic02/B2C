import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/static/images/Transparent.png";
import Heart from "@/public/static/images/heart.png";
import ShoppingBag from "@/public/static/images/shopping-bag.png";
import Search from "@/public/static/images/search.png";
import HamburgerIcon from "@/public/static/images/hamburger.webp";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="border-b border-gray-200 relative">
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="lg:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={HamburgerIcon} alt="Menu" width={30} height={30} />
            </button>
          </div>
          <div className="lg:hidden flex-shrink-0">
            <a href="#">
              <Image
                src={Logo}
                alt="logo"
                width={150}
                height={50}
                priority={true}
              />
            </a>
          </div>

          <nav className="hidden lg:flex space-x-8 text-gray-700 font-medium items-center mx-auto">
            <a href="#" className="hover:text-gray-900">
              NEW IN
            </a>
            <a href="#" className="hover:text-gray-900">
              INSPO
            </a>
            <a href="#" className="hover:text-gray-900">
              SHOP
            </a>
            <div className="flex-shrink-0 hidden lg:block">
              <a href="#">
                <Image src={Logo} alt="logo" width={200} height={50} />
              </a>
            </div>
            <a href="#" className="hover:text-gray-900">
              OUTLET
            </a>
            <a href="#" className="hover:text-gray-900">
              ABOUT
            </a>
          </nav>
          <div className="flex space-x-6 text-gray-700 items-center">
            <a href="#" className="hover:text-gray-900">
              <Image src={Search} alt="search" height={20} width={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <Image src={Heart} alt="heart" height={20} width={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <Image src={ShoppingBag} alt="bag" height={20} width={20} />
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute right-32 top-16 bg-white border border-gray-200 shadow-lg rounded-md w-48 z-50"
          >
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                NEW IN
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                INSPO
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                SHOP
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                OUTLET
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                ABOUT
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
