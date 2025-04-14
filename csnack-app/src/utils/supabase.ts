import { createClient } from "@supabase/supabase-js";

// Supabase URL과 API 키는 실제 값으로 대체해야 합니다
// 이 값들은 Supabase 프로젝트 설정에서 찾을 수 있습니다
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
