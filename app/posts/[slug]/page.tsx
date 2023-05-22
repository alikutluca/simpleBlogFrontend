import PostArticle from "@/components/PostArticle";

type Props = {
  params: { slug: string };
};

export default function page({ params }: Props) {
  return <PostArticle params={params} />;
}
