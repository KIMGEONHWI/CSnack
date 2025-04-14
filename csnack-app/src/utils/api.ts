import { supabase } from "./supabase";
import {
  CategoryTable,
  QuizTable,
  Category,
  Quiz,
  QuizCategory,
} from "./supabaseTypes";

// 모든 카테고리 가져오기
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    console.error("카테고리를 가져오는 중 오류 발생:", error);
    return [];
  }

  return data as Category[];
}

// 특정 카테고리에 속한 퀴즈 가져오기
export async function getQuizzesByCategoryId(
  categoryId: string
): Promise<Quiz[]> {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("category_id", categoryId);

  if (error) {
    console.error("퀴즈를 가져오는 중 오류 발생:", error);
    return [];
  }

  // 데이터베이스 컬럼 이름을 프론트엔드 프로퍼티 이름으로 변환
  return data.map((quiz: QuizTable) => ({
    id: quiz.id,
    question: quiz.question,
    options: quiz.options,
    correctAnswer: quiz.correct_answer,
    explanation: quiz.explanation,
  }));
}

// 특정 카테고리와 해당 퀴즈 모두 가져오기
export async function getCategoryWithQuizzes(
  categoryId: string
): Promise<QuizCategory | null> {
  // 1. 카테고리 정보 가져오기
  const { data: categoryData, error: categoryError } = await supabase
    .from("categories")
    .select("*")
    .eq("id", categoryId)
    .single();

  if (categoryError) {
    console.error("카테고리를 가져오는 중 오류 발생:", categoryError);
    return null;
  }

  // 2. 퀴즈 정보 가져오기
  const quizzes = await getQuizzesByCategoryId(categoryId);

  return {
    id: categoryData.id,
    name: categoryData.name,
    quizzes,
  };
}

// 모든 카테고리와 해당 퀴즈 가져오기
export async function getAllCategoriesWithQuizzes(): Promise<QuizCategory[]> {
  const categories = await getCategories();
  const result: QuizCategory[] = [];

  for (const category of categories) {
    const quizzes = await getQuizzesByCategoryId(category.id);
    result.push({
      id: category.id,
      name: category.name,
      quizzes,
    });
  }

  return result;
}

// 카테고리 추가하기
export async function addCategory(name: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .insert([{ name }])
    .select()
    .single();

  if (error) {
    console.error("카테고리 추가 중 오류 발생:", error);
    return null;
  }

  return data as Category;
}

// 퀴즈 추가하기
export async function addQuiz(
  quiz: Omit<QuizTable, "id" | "created_at">
): Promise<Quiz | null> {
  const { data, error } = await supabase
    .from("quizzes")
    .insert([quiz])
    .select()
    .single();

  if (error) {
    console.error("퀴즈 추가 중 오류 발생:", error);
    return null;
  }

  return {
    id: data.id,
    question: data.question,
    options: data.options,
    correctAnswer: data.correct_answer,
    explanation: data.explanation,
  };
}
