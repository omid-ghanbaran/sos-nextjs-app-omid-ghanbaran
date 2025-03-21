import { NextResponse } from "next/server";
import { Article } from "@/types/type";

interface ResponseError {
  error: string;
}

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
): Promise<NextResponse<Article | ResponseError>> {
  try {
    debugger;
    const { id } = await params;
    console.log(params);

    const res = await fetch(`http://localhost:5000/articles/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: `مقاله‌ای با شناسه ${id} یافت نشد.` },
        { status: 404 }
      );
    }

    const article: Article = await res.json();
    console.log(article);

    return NextResponse.json(article);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در دریافت مقاله رخ داده است." },
      { status: 500 }
    );
  }
}
