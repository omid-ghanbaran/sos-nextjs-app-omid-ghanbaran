import { getArticleDetail } from "@/services/request";
import { Article } from "@/types/type";

export default async function ArticlePage({
  params,
}: {
  params: { "article-id": string };
}) {
  const { "article-id": articleId } = params;
  const article: Article = await getArticleDetail(articleId);

  return (
    <div>
      <h1>Article ID: {article.id}</h1>
      <p>This is the article page for ID: {article.title}.</p>
    </div>
  );
}
