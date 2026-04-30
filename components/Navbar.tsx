// src/components/Navbar.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useSelector } from "react-redux";

import { FiShoppingCart, FiHome, FiInfo, FiFileText } from "react-icons/fi";
import { RootState } from "../store/store";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const pathname = usePathname();
  const navbarRef = useRef<HTMLElement>(null);
  const cartItemCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );
    }
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: FiHome },
    { path: "/about", label: "About", icon: FiInfo },
  ];

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-cyan-50/5 backdrop-blur-md shadow-sm"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Halder Traders
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`nav-link flex items-center space-x-1 ${
                    isActive ? "text-purple-600" : "text-gray-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="relative">
              <Link href="/order">
                <FiShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-purple-600 transition-colors" />
              </Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
