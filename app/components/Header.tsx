import Link from "next/link";
import ToggleTheme from "../components/ToggleTheme";
import ToggleMobileMenu from "./ToggleMobileMenu";

const Header = () => {
  return (
    <header className="shadow-lg sticky top-0 z-50 bg-white dark:bg-darkBg">
      <div className="container py-3 lg:py-6 flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black text-blue2 dark:text-blue2">
          LOGO
        </h1>
        <nav className="hidden md:flex gap-5 font-semibold text-lg">
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
        <div className="hidden md:block">
          <ToggleTheme />
        </div>
        <div className="md:hidden grid content-center">
          <ToggleMobileMenu />
        </div>
      </div>
    </header>
  );
};

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "About Us",
    href: "/about",
  },
  {
    id: 3,
    text: "Contact Us",
    href: "/contact",
  },
];

export default Header;
