import * as React from "react";
import { Article } from "@/types/type";
import { getPosts } from "@/services/request";
import ArticleCard from "@/components/view/Article";
import ArticleList from "@/components/view/ArticleList";
import Link from "next/link";

export default async function HomePage() {
  const articles: Article[] = await getPosts();
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
