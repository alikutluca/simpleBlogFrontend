"use client";

import Link from "next/link";
import { BsList } from "react-icons/bs";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center mb-10">
      <Link
        href="/"
        className="basis-1/4 font-extrabold text-3xl md:text-4xl lg:text-5xl p-0 tracking-wider text-[#333333] "
      >
        tarih
      </Link>
      <BsList className="sm:hidden" />
      <div className="  basis-2/4  justify-between hidden sm:flex md:max-w-lg  text-xl md:text-2xl lg:text-3xl text-[#2c2c2c] ">
        <h3>Eski</h3>
        <h3>Yeni</h3>
        <h3>Daha Eski</h3>
      </div>
    </header>
  );
}

export default Header;
