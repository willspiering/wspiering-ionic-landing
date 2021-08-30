import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="top-0 z-10 flex flex-wrap items-center justify-between w-full gap-6 px-4 text-center bg-white md:px-20 md:absolute md: md:bg-transparent py-7 md:text-left">
      <Image src="/logo.png" width={40} height={32} />
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          class="menu-btn flex items-center px-3 py-2 border rounded text-text-light border-text-light hover:text-primary hover:border-primary"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul
        className={`flex-grow ${
          isOpen ? "block" : "hidden"
        } w-full gap-6 font-medium menu-links md:flex md:items-center md:w-auto`}
      >
        <li>
          <Link href="/product">
            <a className="text-text-light hover:text-primary">Product</a>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <a className="text-text-light hover:text-primary">Features</a>
          </Link>
        </li>
        <li>
          <Link href="/enterprise">
            <a className="text-text-light hover:text-primary">Enterprise</a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a className="text-text-light hover:text-primary">Company</a>
          </Link>
        </li>
      </ul>
      <ul
        className={`flex-grow ${
          isOpen ? "block" : "hidden"
        } w-full gap-6 font-semibold menu-links md:flex md:ml-auto md:items-center md:w-auto md:justify-end`}
      >
        <li>
          <a
            href="#"
            className="text-text-light lg:text-white hover:text-primary"
          >
            Sign in
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-text-light lg:text-white hover:text-primary"
          >
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
