export default function ArticlePage({
  params,
}: {
  params: { "article-id": string };
}) {
  const { "article-id": articleId } = params;

  return (
    <div>
      <h1>Article ID: {articleId}</h1>
      <p>This is the article page for ID: {articleId}.</p>
    </div>
  );
}
