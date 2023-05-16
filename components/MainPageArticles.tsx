import Link from "next/link";

function MainPageArticles() {
  return (
    <div className="grid sm:flex flex-row mt-3 gap-8 justify-between">
      <Link href="/posts" className="basis-2/3">
        <img src="/war_1.jpg" className="" />
      </Link>
      <div className="basis-1/3 flex flex-col justify-between">
        <div className="basis-1/8 flex justify-between">
          <div className="sm:hidden">
            <h3 className="text-[2vw] font-semibold">by Tarih</h3>
          </div>
          <div className="flex justify-between gap-5">
            <h3 className="text-[1.5vw] font-semibold">May 16,2023</h3>
            <h3 className="text-[1.5vw] text-gray-500">5 min read</h3>
          </div>
        </div>
        <div className="basis-6/8 mt-[1.5vw] mb-[1.5vw] ">
          <h1 className="text-[2.5vw] font-bold mb-[3vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            consequatur,{" "}
          </h1>
          <h2 className="text-[2vw]">Lorem ipsum dolor sit </h2>
        </div>
        <div className="hidden sm:block basis-1/8">
          <h3 className="text-[2vw] font-semibold">by Tarih</h3>
        </div>
      </div>
    </div>
  );
}

export default MainPageArticles;
