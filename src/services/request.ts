import { Article } from "@/types/type";

export async function getPosts(): Promise<Article[]> {
  const res = await fetch("http://localhost:3000/api/articles");

  if (!res.ok) {
    throw new Error("خطا در دریافت داده‌ها");
  }

  return res.json();
}

export async function getArticleDetail(id: string): Promise<Article> {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`);

  if (!res.ok) {
    throw new Error("خطا در دریافت داده‌ها");
  }

  return res.json();
}
