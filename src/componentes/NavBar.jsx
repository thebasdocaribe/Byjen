import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { navLinks } from "../constants";
import { FaTiktok } from "react-icons/fa";

const NavBar = () => {
  return (
   <header>
        <nav>
            <a href="/">
            <img src="/logo.png" alt="logo" />
            </a>

            <ul>
                {navLinks.map(({ label }) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">       
                <a href="https://wa.me/56938946998" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-green-600 hover:text-white">
                    <IoLogoWhatsapp className="text-lg" />
                </a>
                <a href="https://www.instagram.com/byjen.marketing/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:bg-red-500 hover:text-white">
                    <AiFillInstagram className="text-lg" />
                </a>
                 <a href="https://www.tiktok.com/@byjen8" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 transition-all hover:bg-gradient-to-r hover:text-white">
                    <FaTiktok  className="text-lg" />
                </a>
            </div>
        </nav>
   </header>
  )
}

export default NavBar
