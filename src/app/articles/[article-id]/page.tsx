import ArticleDetail from "@/components/view/ArticleDetail";
import { getArticleDetail } from "@/services/request";
import { Article } from "@/types/type";

export default async function ArticlePage({
  params,
}: {
  params: { "article-id": string };
}) {
  const { "article-id": articleId } = params;
  const article: Article = await getArticleDetail(articleId);

  return <ArticleDetail {...article} />;
}
