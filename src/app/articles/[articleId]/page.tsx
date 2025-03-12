import ArticleDetail from "@/components/view/ArticleDetail";
import { Article } from "@/types/type";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const articles: Article[] = await fetch(
      "http://localhost:3000/api/articles"
    ).then((res) => res.json());
    return articles.map((article) => ({
      articleId: String(article.id),
    }));
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;

  const article: Article = await fetch(
    `http://localhost:3000/api/articles/${articleId}`
  ).then((res) => {
    if (!res.ok) {
      notFound();
    }
    return res.json();
  });

  return <ArticleDetail {...article} />;
}
