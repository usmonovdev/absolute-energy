import Link from "next/link";
import Image from "next/image";
import Mobile from "./Mobile";
import { navbar } from "@/data";
import { useState } from "react";
import { Menu } from "iconoir-react";
import "./styles.module.css";

const index = ({ urlsColorIsBlack = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => setMenuOpen(!menuOpen);
  return (
    <header className="w-full z-[1000] absolute">
      <div className="custom-container">
        <nav className="relative flex flex-row justify-between items-center py-6 px-3 rounded-2xl">
          <div className="flex flex-row items-center gap-2">
            <Link href={"/"} className="text-gradient font-trap_bold">
              ABSOLUTE ENERGY
            </Link>
          </div>
          <ul className="md:flex hidden flex-row items-center justify-between gap-3">
            {navbar.map((link) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    urlsColorIsBlack ? "text-dark" : "text-white"
                  } text-[16px]`}
                >
                  <Link href={link.url}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
          <Menu
            onClick={handleClick}
            className={`cursor-pointer md:hidden flex ${
              urlsColorIsBlack ? "text-dark" : "text-white"
            }`}
          />
        </nav>
        <Mobile open={menuOpen} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default index;
