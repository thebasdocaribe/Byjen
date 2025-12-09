import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>

        {/* MENU DESKTOP (igual ao seu) */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label} className="hover:text-purple-600 transition">{label}</a>
            </li>
          ))}
        </ul>

        {/* ÍCONES DESKTOP (igual ao seu) */}
        <div className="hidden md:flex flex-center gap-3">
          <a href="https://wa.me/56938946998" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-green-600 hover:text-white">
            <IoLogoWhatsapp className="text-lg" />
          </a>
          <a href="https://www.instagram.com/byjen.marketing/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white">
            <AiFillInstagram className="text-lg" />
          </a>
          <a href="https://www.tiktok.com/@byjen8" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:text-white">
            <FaTiktok className="text-lg" />
          </a>
        </div>

        {/* ÍCONE HAMBÚRGUER (aparece só no mobile) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl"
        >
          <FiMenu />
        </button>
      </nav>

      {/* MENU LATERAL MOBILE */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>

        {/* header do menu */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* links do seu header */}
        <ul className="flex flex-col p-4 gap-4">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a
                href={label}
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* seus ícones dentro do menu mobile */}
        <div className="flex gap-3 p-4">
          <a href="https://wa.me/56938946998" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-green-600 hover:text-white">
            <IoLogoWhatsapp className="text-lg" />
          </a>
          <a href="https://www.instagram.com/byjen.marketing/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white">
            <AiFillInstagram className="text-lg" />
          </a>
          <a href="https://www.tiktok.com/@byjen8" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:text-white">
            <FaTiktok className="text-lg" />
          </a>
        </div>
      </div>

      {/* backdrop escuro (para fechar ao clicar fora) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default NavBar;
