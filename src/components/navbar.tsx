"use client";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const navLinks = [
  { label: "Wishlist", href: "/wishlist", icon: <FaRegHeart /> },
  { label: "Cart", href: "/cart", icon: <HiOutlineShoppingBag /> },
  { label: "Login", href: "/login", icon: <FaRegUser /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-50 border border-b border-border bg-bg">
      <nav
        aria-label="main-navigation"
        className="mx-auto w-full max-w-370 flex items-center justify-between gap-6 px-6 py-4 md:px-8"
      >
        <div className="flex flex-1 items-center gap-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Shop
          </Link>
          <div className="hidden w-full max-w-sm md:block">
            <input
              type="search"
              placeholder="Search products..."
              aria-label="search-products"
              className="min-h-11 w-full rounded-input border border-border px-4 text-sm"
            />
          </div>
        </div>
        <ul className="hidden shrink-0 items-center gap-4 sm:gap-6 md:flex">
          {navLinks.map((item) => {
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 font-medium text-sm hover:underline"
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={handleHamburgerMenu}
          className="text-2xl md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 top-full z-50 w-full border-t border-border bg-bg px-6 py-5 shadow-lg md:hidden">
            <div className="relative mb-6">
              <input
                type="search"
                placeholder="Search products..."
                aria-label="search-products"
                className="min-h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm outline-none transition focus:border-link/50"
              />
            </div>

            <ul className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between rounded-xl px-3 py-3 transition-colors hover:bg-surface"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-lg transition-colors group-hover:bg-border">
                        {item.icon}
                      </span>

                      <span className="text-sm font-medium">{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
