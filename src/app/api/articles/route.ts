import { Article } from "@/types/type";
import { NextResponse } from "next/server";

interface ResponseError {
  error: string;
}

export async function GET(): Promise<NextResponse<Article[] | ResponseError>> {
  try {
    const res = await fetch("http://localhost:5000/articles");

    if (!res.ok) {
      return NextResponse.json(
        { error: `خطا در دریافت داده‌ها (${res.status} - ${res.statusText})` },
        { status: res.status }
      );
    }

    const posts: Article[] = await res.json();

    return NextResponse.json(posts);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در ارتباط با سرور رخ داده است." },
      { status: 500 }
    );
  }
}
