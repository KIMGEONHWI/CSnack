"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getCategoryWithQuizzes } from "@/utils/api";
import { QuizCategory, Quiz } from "@/utils/supabaseTypes";

interface Props {
  params: {
    categoryId: string;
  };
}

export default function QuizPage({ params }: Props) {
  const router = useRouter();
  const { categoryId } = params;

  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<QuizCategory | null>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Supabase에서 카테고리와 퀴즈 데이터 가져오기
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const categoryData = await getCategoryWithQuizzes(categoryId);
        setCategory(categoryData);
      } catch (error) {
        console.error("카테고리 데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">로딩 중...</div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          존재하지 않는 카테고리입니다
        </h1>
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const quizzes = category.quizzes;

  if (quizzes.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          이 카테고리에는 아직 퀴즈가 없습니다
        </h1>
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  const handleSelectQuiz = (index: number) => {
    setCurrentQuizIndex(index);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (
      currentQuizIndex !== null &&
      option === quizzes[currentQuizIndex].correctAnswer
    ) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex !== null && currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(null);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  // 퀴즈 리스트 화면 표시
  if (currentQuizIndex === null && !quizFinished) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{category.name}</h1>
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                홈으로
              </Link>
            </div>

            <p className="mb-6 text-gray-600">문제를 선택하여 풀어보세요:</p>

            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <button
                  key={quiz.id}
                  onClick={() => handleSelectQuiz(index)}
                  className="w-full text-left p-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                >
                  <span className="font-medium">
                    {index + 1}. {quiz.question}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 퀴즈 푸는 화면 표시
  const currentQuiz =
    currentQuizIndex !== null ? quizzes[currentQuizIndex] : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {!quizFinished ? (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{category.name}</h1>
              <div className="text-gray-600">
                {currentQuizIndex !== null ? currentQuizIndex + 1 : 0} /{" "}
                {quizzes.length}
              </div>
            </div>

            {currentQuiz && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  {currentQuiz.question}
                </h2>
                <div className="space-y-3">
                  {currentQuiz.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left p-3 rounded-lg border transition ${
                        selectedOption === option
                          ? option === currentQuiz.correctAnswer
                            ? "bg-green-100 border-green-500"
                            : "bg-red-100 border-red-500"
                          : "border-gray-300 hover:border-blue-500"
                      } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                      disabled={isAnswered}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isAnswered && currentQuiz && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">
                  {selectedOption === currentQuiz.correctAnswer
                    ? "정답입니다! 👏"
                    : "오답입니다! 😢"}
                </p>
                <p className="text-gray-700">{currentQuiz.explanation}</p>
              </div>
            )}

            <div className="flex justify-between">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                문제 목록
              </button>
              {isAnswered && (
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  {currentQuizIndex !== null &&
                  currentQuizIndex < quizzes.length - 1
                    ? "다음 문제"
                    : "결과 보기"}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">퀴즈 완료!</h1>
            <p className="text-xl mb-6">
              {quizzes.length}문제 중 <span className="font-bold">{score}</span>
              개 정답 (정답률: {Math.round((score / quizzes.length) * 100)}%)
            </p>

            {score === quizzes.length ? (
              <p className="mb-8 text-green-600">
                완벽합니다! 모든 문제를 맞혔습니다.
              </p>
            ) : score >= quizzes.length * 0.7 ? (
              <p className="mb-8 text-blue-600">
                훌륭합니다! 대부분의 문제를 이해하고 있습니다.
              </p>
            ) : (
              <p className="mb-8 text-orange-600">
                좀 더 학습이 필요합니다. 다시 도전해보세요!
              </p>
            )}

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                문제 목록
              </button>
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition"
              >
                다른 카테고리
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
