import React from "react";
import Link from "next/link";
import { getCategories } from "@/utils/api";

// 서버 컴포넌트로 데이터 가져오기
export default async function Home() {
  // Supabase에서 카테고리 데이터 가져오기
  const categories = await getCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold text-center my-8">CSnack</h1>
        <p className="text-center text-gray-600 mb-10">
          카테고리를 선택하여 CS 기술 면접 문제를 풀어보세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/quiz/${category.id}`}
              key={category.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-600">
                {category.name} 관련 면접 질문을 연습해보세요
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
