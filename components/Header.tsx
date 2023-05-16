import Link from "next/link";
import { BsList } from "react-icons/bs";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center mb-10">
      <Link href="/" className="basis-1/4 font-extrabold text-[6vw] p-0 ">
        <h1 className="tracking-wider text-[#333333]">tarih</h1>
      </Link>
      <BsList className="sm:hidden" />
      <div className="  basis-2/4  justify-between hidden sm:flex gap-[5vw] text-[3vw] text-[#2c2c2c] ">
        <h3>Eski</h3>
        <h3>Yeni</h3>
        <h3>Daha Eski</h3>
      </div>
    </header>
  );
}

export default Header;
