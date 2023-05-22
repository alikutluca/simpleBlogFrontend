import articlesArray from "@/public/public";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

type Article =
  | {
      url: string;
      slug: string;
      title: string;
      synopsis: string;
      article: string;
      date: string;
      howLong: string;
      writer: string;
    }
  | any;

function PostArticle({ params }: Props) {
  const article: Article = articlesArray.find(
    (article) => article.slug === params.slug
  );

  return (
    <div className="flex flex-col gap-5 mb-10">
      <Image
        src={article?.url}
        width={4000}
        height={1000}
        alt=""
        className="max-h-64"
      />

      <div>
        <h1 className="font-bold font-seif tracking-wide capitalize text-lg md:text-xl lg:text-3xl  mb-[3vw]">
          {article?.title}
        </h1>

        <h3 className="text-sm md:text-base lg:text-lg font-bold">by Tarih</h3>
        <h3 className="text-xs md:text-sm lg:text-base text-gray-500">
          May 16,2023
        </h3>
      </div>
      <article className="font-mono text-base md:text-lg lg:text-2xl text-gray-700">
        {article?.article}
      </article>
    </div>
  );
}

export default PostArticle;
