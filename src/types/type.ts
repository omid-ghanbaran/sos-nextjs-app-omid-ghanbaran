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

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
