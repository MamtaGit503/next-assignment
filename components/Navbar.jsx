"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
        ${scrolled ? "bg-black/40 backdrop-blur" : "bg-transparent"}`}
      >
        <nav className="flex items-center justify-between px-6 md:px-16 py-6">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={126}
            height={45}
            className="w-22.5 md:w-31.5"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-[17px] uppercase font-semibold">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-gray-300">
                Events
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-300">
                Podcast
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
          </ul>

          <button
            className="md:hidden z-50"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={118}
            height={45}
            className="w-22.5 md:w-29.5"
          />
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-6 py-8 text-sm uppercase">
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#events" onClick={() => setOpen(false)}>
              Events
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setOpen(false)}>
              Podcast
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
