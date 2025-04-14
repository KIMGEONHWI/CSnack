const { createClient } = require("@supabase/supabase-js");
const { quizData } = require("../src/data/quizDataCommonjs");
const dotenv = require("dotenv");

// 환경 변수 로드
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Supabase 서비스 롤 키를 사용하여 관리자 권한으로 연결
// 주의: 이 키는 보안에 민감하므로 공개하면 안 됩니다
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateData() {
  try {
    console.log("데이터 마이그레이션 시작...");

    // 1. 카테고리 마이그레이션
    console.log("카테고리 마이그레이션 중...");
    for (const category of quizData) {
      const { data: existingCategory, error: queryError } = await supabase
        .from("categories")
        .select("*")
        .eq("id", category.id)
        .maybeSingle();

      if (queryError) {
        throw queryError;
      }

      // 카테고리가 없으면 추가
      if (!existingCategory) {
        const { error } = await supabase
          .from("categories")
          .insert([{ id: category.id, name: category.name }]);

        if (error) {
          throw error;
        }
        console.log(`카테고리 추가됨: ${category.name}`);
      } else {
        console.log(`카테고리 이미 존재: ${category.name}`);
      }

      // 2. 해당 카테고리의 퀴즈 마이그레이션
      console.log(`${category.name} 카테고리의 퀴즈 마이그레이션 중...`);
      for (const quiz of category.quizzes) {
        const { data: existingQuiz, error: queryQuizError } = await supabase
          .from("quizzes")
          .select("*")
          .eq("id", quiz.id)
          .maybeSingle();

        if (queryQuizError) {
          throw queryQuizError;
        }

        // 퀴즈가 없으면 추가
        if (!existingQuiz) {
          const { error } = await supabase.from("quizzes").insert([
            {
              id: quiz.id,
              category_id: category.id,
              question: quiz.question,
              options: quiz.options,
              correct_answer: quiz.correctAnswer,
              explanation: quiz.explanation,
            },
          ]);

          if (error) {
            throw error;
          }
          console.log(`퀴즈 추가됨: ${quiz.question.substring(0, 30)}...`);
        } else {
          console.log(`퀴즈 이미 존재: ${quiz.question.substring(0, 30)}...`);
        }
      }
    }

    console.log("데이터 마이그레이션 완료!");
  } catch (error) {
    console.error("마이그레이션 중 오류 발생:", error);
  }
}

// 스크립트 실행
migrateData();
