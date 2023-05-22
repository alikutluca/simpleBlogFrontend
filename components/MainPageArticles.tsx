import Image from "next/image";
import Link from "next/link";
import articlesArray from "@/public/public";

function MainPageArticles() {
  return articlesArray.map((articles) => (
    <div
      key={articles.synopsis}
      className="grid sm:flex flex-row mt-3 gap-4 justify-between"
    >
      <Link href="/posts" className="basis-7/12">
        <Image src={articles.url} width={1000} height={1000} alt="asd" />
      </Link>
      <div className="basis-5/12 flex flex-col justify-between text-justify">
        <div className="flex justify-between">
          <div className="sm:hidden">
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">
              {articles.writer}
            </h3>
          </div>
          <div className="flex justify-between gap-5">
            <h3 className="text-xs md:text-sm lg:text-base xl:text-sm font-semibold">
              {articles.date}
            </h3>
            <h3 className="text-xs md:text-sm lg:text-base xl:text-sm text-gray-500">
              {articles.howLong}
            </h3>
          </div>
        </div>
        <div className="my-4 ">
          <h1 className="text-lg md:text-xl lg:text-3xl xl:text-lg  font-bold ">
            {articles.title}
          </h1>
          <h2 className="text-base md:text-lg lg:text-2xl xl:text-base">
            {articles.synopsis}
          </h2>
        </div>
        <div className="hidden sm:block ">
          <h3 className="text-sm md:text-base lg:text-lg xl:text-sm font-semibold">
            {articles.writer}
          </h3>
        </div>
      </div>
    </div>
  ));
}

export default MainPageArticles;
