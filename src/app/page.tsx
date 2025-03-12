import * as React from "react";
import { Article } from "@/types/type";
import ArticleCard from "@/components/view/Article";
import ArticleList from "@/components/view/ArticleList";
import Link from "next/link";

export const revalidate = 3600;

export default async function HomePage() {
  const data = await fetch("http://localhost:3000/api/articles");
  const articles: Article[] = await data.json();
  return (
    <ArticleList>
      {articles.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <ArticleCard article={article} />
        </Link>
      ))}
    </ArticleList>
  );
}
