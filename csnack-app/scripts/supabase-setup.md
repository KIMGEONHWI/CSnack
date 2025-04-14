# Supabase 설정 및 데이터 마이그레이션 가이드

## 1. Supabase 테이블 생성

1. [Supabase 대시보드](https://app.supabase.com)에 로그인합니다.
2. 프로젝트를 선택하거나 새 프로젝트를 생성합니다.
3. 왼쪽 사이드바에서 "SQL 편집기"를 클릭합니다.
4. "새 쿼리" 버튼을 클릭하여 새 SQL 편집기를 엽니다.
5. `scripts/create-tables.sql` 파일의 내용을 복사하여 SQL 편집기에 붙여넣습니다.
6. "실행" 버튼을 클릭하여 SQL 쿼리를 실행합니다.
7. 왼쪽 사이드바의 "테이블 편집기"에서 `categories`와 `quizzes` 테이블이 생성되었는지 확인합니다.

## 2. API 키 및 URL 가져오기

1. 왼쪽 사이드바에서 "프로젝트 설정"을 클릭합니다.
2. "API" 탭을 선택합니다.
3. 다음 정보를 복사하여 `.env.local` 파일에 붙여넣습니다:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL` 값으로 사용
   - **anon public key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` 값으로 사용
   - **service_role key**: `SUPABASE_SERVICE_ROLE_KEY` 값으로 사용 (보안에 주의)

## 3. 데이터 마이그레이션 실행

`.env.local` 파일이 올바르게 설정되었는지 확인한 후 다음 명령을 실행합니다:

```bash
# 작업 디렉토리가 csnack-app인지 확인
cd csnack-app

# 데이터 마이그레이션 실행
pnpm migrate-data
```

성공적으로 마이그레이션이 완료되면 다음과 같은 메시지가 표시됩니다:

```
데이터 마이그레이션 시작...
카테고리 마이그레이션 중...
카테고리 추가됨: 컴퓨터 구조
컴퓨터 구조 카테고리의 퀴즈 마이그레이션 중...
...
데이터 마이그레이션 완료!
```

## 4. 애플리케이션 실행

데이터 마이그레이션이 완료되면 애플리케이션을 실행합니다:

```bash
pnpm dev
```

이제 애플리케이션은 Supabase에서 데이터를 가져와 사용합니다.
