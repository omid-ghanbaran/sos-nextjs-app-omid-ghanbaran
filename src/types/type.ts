export interface Article {
  id: number;
  title: string;
  content: string;
  imageBlog: string;
  studyTime: string;
}

export interface ArticleCardProps {
  article: Article;
}
