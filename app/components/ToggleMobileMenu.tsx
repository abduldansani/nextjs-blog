"use client";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { navLinks } from "./Header";
import Link from "next/link";
import ThemeSwitch from "./ToggleTheme";

const ToggleMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  if (!menuOpen) {
    return (
      <div className="flex gap-4">
        <ThemeSwitch />
        <button
          onClick={() => setMenuOpen(true)}
          className="text-blue2 hover:text-blue1 transition-colors duration-300"
        >
          <MdMenu className="size-8" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-0 right-0 h-screen bg-white dark:bg-darkBg w-full">
      <div className="shadow-lg flex justify-between items-center py-3 px-4">
        <h1 className="text-3xl lg:text-4xl font-black text-blue2 dark:text-blue2">
          LOGO
        </h1>
        <div className="flex gap-4 items-center">
          <ThemeSwitch />

          <button
            onClick={() => setMenuOpen(false)}
            className="text-blue2 hover:text-blue1"
          >
            <MdClose className="size-8" />
          </button>
        </div>
      </div>
      <div className="p-4 mt-10">
        <nav className="flex flex-col gap-5 font-semibold text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-blue2 hover:text-blue1 uppercase text-base font-semibold transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ToggleMobileMenu;
