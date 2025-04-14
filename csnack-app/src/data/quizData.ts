export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  quizzes: Quiz[];
}

export const quizData: QuizCategory[] = [
  {
    id: "computer-architecture",
    name: "컴퓨터 구조",
    quizzes: [
      {
        id: "ca-1",
        question: "캐시(Cache)의 주요 목적은 무엇인가요?",
        options: [
          "메모리 용량 증가",
          "CPU와 메모리 간의 속도 차이 감소",
          "하드 디스크 공간 절약",
          "네트워크 대역폭 확보",
        ],
        correctAnswer: "CPU와 메모리 간의 속도 차이 감소",
        explanation:
          "캐시는 CPU와 메인 메모리 사이의 속도 차이를 줄이기 위해 사용되는 고속 메모리입니다. CPU가 자주 접근하는 데이터를 더 빠른 캐시 메모리에 저장하여 접근 시간을 단축시킵니다.",
      },
      {
        id: "ca-2",
        question: "폰 노이만 구조의 특징이 아닌 것은?",
        options: [
          "프로그램과 데이터를 같은 메모리에 저장",
          "순차적 명령어 실행",
          "명령어와 데이터를 별도의 메모리에 저장",
          "제어 장치, 연산 장치, 메모리, 입출력 장치로 구성",
        ],
        correctAnswer: "명령어와 데이터를 별도의 메모리에 저장",
        explanation:
          "폰 노이만 구조는 프로그램과 데이터를 같은 메모리에 저장하는 저장 프로그램 방식을 사용합니다. 명령어와 데이터를 별도의 메모리에 저장하는 것은 하버드 구조의 특징입니다.",
      },
      {
        id: "ca-3",
        question: "다음 중 RISC 프로세서의 특징으로 옳은 것은?",
        options: [
          "복잡한 명령어 집합",
          "가변 길이 명령어",
          "단순한 명령어 집합과 고정 길이 명령어",
          "마이크로코드 제어",
        ],
        correctAnswer: "단순한 명령어 집합과 고정 길이 명령어",
        explanation:
          "RISC(Reduced Instruction Set Computer)는 단순하고 최적화된 명령어 집합을 사용하며, 대부분 고정 길이 명령어를 사용하여 파이프라이닝과 같은 기법의 효율을 높입니다.",
      },
    ],
  },
  {
    id: "data-structure",
    name: "자료구조",
    quizzes: [
      {
        id: "ds-1",
        question: "시간 복잡도가 O(1)인 연산을 지원하는 자료구조는?",
        options: [
          "배열의 이진 탐색",
          "연결 리스트의 삽입/삭제",
          "해시 테이블의 검색/삽입",
          "이진 트리의 중위 순회",
        ],
        correctAnswer: "해시 테이블의 검색/삽입",
        explanation:
          "해시 테이블은 이상적인 경우 O(1) 시간 복잡도로 검색, 삽입, 삭제 연산을 수행할 수 있습니다. 해시 함수를 통해 키를 인덱스로 변환하여 즉시 접근이 가능합니다.",
      },
      {
        id: "ds-2",
        question: "스택(Stack)에서 지원하지 않는 연산은?",
        options: ["push", "pop", "peek", "random access"],
        correctAnswer: "random access",
        explanation:
          "스택은 LIFO(Last In First Out) 구조로, 가장 최근에 삽입된 요소만 접근 가능합니다. push(삽입), pop(제거), peek(top 요소 조회) 연산은 지원하지만, 임의 접근(random access)은 스택의 기본 연산으로 지원하지 않습니다.",
      },
      {
        id: "ds-3",
        question: "이진 탐색 트리의 특징으로 옳지 않은 것은?",
        options: [
          "모든 노드는 최대 두 개의 자식을 가진다",
          "왼쪽 서브트리의 값은 노드의 값보다 작다",
          "오른쪽 서브트리의 값은 노드의 값보다 크다",
          "항상 O(log n) 시간 복잡도로 검색이 가능하다",
        ],
        correctAnswer: "항상 O(log n) 시간 복잡도로 검색이 가능하다",
        explanation:
          "이진 탐색 트리는 불균형하게 구성될 경우(예: 한쪽으로 치우친 트리) 최악의 경우 O(n) 시간 복잡도를 가질 수 있습니다. 항상 O(log n)을 보장하려면 AVL 트리나 레드-블랙 트리와 같은 균형 이진 탐색 트리가 필요합니다.",
      },
    ],
  },
  {
    id: "database",
    name: "데이터베이스",
    quizzes: [
      {
        id: "db-1",
        question: "다음 중 정규화의 주요 목적이 아닌 것은?",
        options: [
          "데이터 중복 최소화",
          "데이터 무결성 유지",
          "데이터베이스 성능 향상",
          "이상 현상(Anomaly) 방지",
        ],
        correctAnswer: "데이터베이스 성능 향상",
        explanation:
          "정규화는 데이터 중복을 최소화하고 이상 현상을 방지하며 데이터 무결성을 유지하는 것이 주목적입니다. 반면, 과도한 정규화는 조인 연산이 많아져 오히려 성능이 저하될 수 있습니다. 성능 향상을 위해서는 때로는 비정규화(Denormalization)를 사용합니다.",
      },
      {
        id: "db-2",
        question: "트랜잭션의 ACID 속성 중 Isolation(격리성)의 의미는?",
        options: [
          "트랜잭션이 완료된 후에는 영구적으로 반영되어야 함",
          "트랜잭션 내의 연산들이 모두 성공하거나 모두 실패해야 함",
          "동시에 실행되는 트랜잭션들이 서로 영향을 미치지 않아야 함",
          "트랜잭션 실행 전과 후에 데이터베이스가 일관된 상태를 유지",
        ],
        correctAnswer:
          "동시에 실행되는 트랜잭션들이 서로 영향을 미치지 않아야 함",
        explanation:
          "Isolation(격리성)은 동시에 실행되는 트랜잭션들이 서로 간섭하지 않고 독립적으로 실행되는 것처럼 보이게 하는 성질입니다. 이를 통해 동시성 문제를 방지합니다.",
      },
      {
        id: "db-3",
        question: "SQL Injection을 방지하기 위한 가장 효과적인 방법은?",
        options: [
          "사용자 입력 데이터를 직접 SQL 쿼리에 연결하기",
          "패스워드를 평문으로 저장하기",
          "준비된 구문(Prepared Statement) 사용하기",
          "데이터베이스를 주기적으로 백업하기",
        ],
        correctAnswer: "준비된 구문(Prepared Statement) 사용하기",
        explanation:
          "SQL Injection은 악의적인 SQL 코드를 삽입하여 데이터베이스를 공격하는 기법입니다. 준비된 구문(Prepared Statement)을 사용하면 SQL 쿼리와 사용자 입력 데이터가 분리되어 처리되므로, 공격자가 쿼리 구조를 변경할 수 없게 됩니다.",
      },
    ],
  },
  {
    id: "network",
    name: "네트워크",
    quizzes: [
      {
        id: "nw-1",
        question: "TCP와 UDP의 가장 큰 차이점은?",
        options: [
          "포트 번호 사용 여부",
          "연결 지향성과 신뢰성 보장 여부",
          "IP 주소 사용 여부",
          "라우팅 기능 지원 여부",
        ],
        correctAnswer: "연결 지향성과 신뢰성 보장 여부",
        explanation:
          "TCP(Transmission Control Protocol)는 연결 지향적이고 신뢰성 있는 데이터 전송을 보장합니다. 반면 UDP(User Datagram Protocol)는 비연결형이며 신뢰성을 보장하지 않지만, 오버헤드가 적고 속도가 빠릅니다.",
      },
      {
        id: "nw-2",
        question: "HTTP 상태 코드 403이 의미하는 것은?",
        options: [
          "요청 성공",
          "리다이렉션",
          "클라이언트 요청 오류(권한 없음)",
          "서버 내부 오류",
        ],
        correctAnswer: "클라이언트 요청 오류(권한 없음)",
        explanation:
          "HTTP 상태 코드 403 Forbidden은 서버가 요청을 이해했지만 권한이 없어 접근이 거부되었음을 의미합니다. 이는 인증된 사용자라도 특정 리소스에 대한 권한이 없는 경우에 발생합니다.",
      },
      {
        id: "nw-3",
        question: "OSI 7계층 모델에서 라우팅을 담당하는 계층은?",
        options: [
          "데이터 링크 계층",
          "네트워크 계층",
          "전송 계층",
          "세션 계층",
        ],
        correctAnswer: "네트워크 계층",
        explanation:
          "OSI 7계층 모델에서 네트워크 계층(3계층)은 패킷의 경로 결정(라우팅)과 논리적 주소 지정(IP 주소)을 담당합니다. 대표적인 프로토콜로는 IP, ICMP, IGMP 등이 있습니다.",
      },
    ],
  },
  {
    id: "operating-system",
    name: "운영체제",
    quizzes: [
      {
        id: "os-1",
        question: "다음 중 교착 상태(Deadlock)의 필요 조건이 아닌 것은?",
        options: [
          "상호 배제(Mutual Exclusion)",
          "점유 대기(Hold and Wait)",
          "선점 불가(No Preemption)",
          "자원 해제(Resource Release)",
        ],
        correctAnswer: "자원 해제(Resource Release)",
        explanation:
          "교착 상태의 네 가지 필요 조건은 상호 배제(Mutual Exclusion), 점유 대기(Hold and Wait), 선점 불가(No Preemption), 순환 대기(Circular Wait)입니다. '자원 해제'는 교착 상태의 조건이 아닙니다.",
      },
      {
        id: "os-2",
        question: "다음 중 페이지 교체 알고리즘이 아닌 것은?",
        options: [
          "FIFO (First-In-First-Out)",
          "LRU (Least Recently Used)",
          "RR (Round Robin)",
          "OPT (Optimal Page Replacement)",
        ],
        correctAnswer: "RR (Round Robin)",
        explanation:
          "Round Robin은 CPU 스케줄링 알고리즘이며, 페이지 교체 알고리즘이 아닙니다. FIFO, LRU, OPT는 모두 페이지 교체 알고리즘입니다.",
      },
      {
        id: "os-3",
        question: "프로세스와 스레드의 차이점으로 옳지 않은 것은?",
        options: [
          "프로세스는 독립적인 메모리 공간을 가지지만, 스레드는 프로세스의 메모리를 공유한다",
          "프로세스 간 통신은 IPC가 필요하지만, 스레드 간 통신은 더 간단하다",
          "프로세스는 최소 하나 이상의 스레드를 포함한다",
          "스레드는 프로세스보다 더 많은 시스템 자원을 사용한다",
        ],
        correctAnswer: "스레드는 프로세스보다 더 많은 시스템 자원을 사용한다",
        explanation:
          "스레드는 프로세스보다 적은 시스템 자원을 사용합니다. 스레드는 프로세스의 자원을 공유하기 때문에 생성이나 컨텍스트 스위칭에 드는 비용이 적습니다.",
      },
    ],
  },
  {
    id: "software-engineering",
    name: "소프트웨어 공학",
    quizzes: [
      {
        id: "se-1",
        question: "애자일(Agile) 방법론의 특징이 아닌 것은?",
        options: [
          "반복적이고 점진적인 개발",
          "고객과의 지속적인 협력",
          "변화에 유연한 대응",
          "포괄적인 문서화 중심",
        ],
        correctAnswer: "포괄적인 문서화 중심",
        explanation:
          "포괄적인 문서화 중심은 전통적인 폭포수 모델(Waterfall Model)의 특징입니다. 애자일 방법론은 작동하는 소프트웨어를 포괄적인 문서보다 중요시하며, 반복적 개발, 고객 협력, 변화에 대한 유연성을 강조합니다.",
      },
      {
        id: "se-2",
        question: "테스트 주도 개발(TDD)의 기본 사이클이 아닌 것은?",
        options: [
          "실패하는 테스트 작성",
          "코드 작성하여 테스트 통과",
          "코드 리팩토링",
          "요구사항 분석",
        ],
        correctAnswer: "요구사항 분석",
        explanation:
          "테스트 주도 개발(TDD)의 기본 사이클은 '실패하는 테스트 작성(Red) → 테스트를 통과하는 코드 작성(Green) → 코드 리팩토링(Refactor)'입니다. 요구사항 분석은 TDD의 기본 사이클에 포함되지 않습니다.",
      },
      {
        id: "se-3",
        question:
          "다음 중 기능적 요구사항(Functional Requirement)에 해당하는 것은?",
        options: [
          "시스템은 99.9%의 가용성을 제공해야 한다",
          "사용자는 계정에 로그인하여 개인 정보를 볼 수 있어야 한다",
          "시스템은 동시에 1,000명의 사용자를 지원해야 한다",
          "데이터는 암호화되어 저장되어야 한다",
        ],
        correctAnswer:
          "사용자는 계정에 로그인하여 개인 정보를 볼 수 있어야 한다",
        explanation:
          "기능적 요구사항은 시스템이 수행해야 하는 특정 기능이나 동작을 정의합니다. 사용자가 로그인하여 정보를 볼 수 있어야 한다는 것은 기능적 요구사항입니다. 나머지 옵션들은 성능, 보안, 확장성과 같은 비기능적 요구사항에 해당합니다.",
      },
    ],
  },
  {
    id: "algorithm",
    name: "알고리즘",
    quizzes: [
      {
        id: "al-1",
        question: "퀵 정렬(Quick Sort)의 평균 시간 복잡도는?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"],
        correctAnswer: "O(n log n)",
        explanation:
          "퀵 정렬의 평균 시간 복잡도는 O(n log n)입니다. 최악의 경우(이미 정렬된 배열)에는 O(n²)까지 성능이 저하될 수 있지만, 평균적으로는 효율적인 정렬 알고리즘입니다.",
      },
      {
        id: "al-2",
        question:
          "그래프 순회 알고리즘 중 깊이 우선 탐색(DFS)에 사용되는 자료구조는?",
        options: [
          "큐(Queue)",
          "스택(Stack)",
          "힙(Heap)",
          "해시 테이블(Hash Table)",
        ],
        correctAnswer: "스택(Stack)",
        explanation:
          "깊이 우선 탐색(DFS)은 스택을 사용하거나 재귀 호출(내부적으로 스택 사용)을 통해 구현됩니다. 반면, 너비 우선 탐색(BFS)은 큐를 사용합니다.",
      },
      {
        id: "al-3",
        question: "동적 프로그래밍(Dynamic Programming)의 핵심 특징은?",
        options: [
          "분할 정복 접근법을 사용",
          "항상 그리디 알고리즘보다 효율적",
          "중복되는 하위 문제의 결과를 저장하여 재활용",
          "언제나 최적의 해결책을 보장",
        ],
        correctAnswer: "중복되는 하위 문제의 결과를 저장하여 재활용",
        explanation:
          "동적 프로그래밍은 중복되는 하위 문제의 결과를 저장(메모이제이션)하고 재활용하여 계산 효율성을 높이는 기법입니다. 최적 부분 구조(optimal substructure)와 중복되는 하위 문제(overlapping subproblems)가 있는 문제에 효과적입니다.",
      },
    ],
  },
  {
    id: "design-pattern",
    name: "디자인 패턴",
    quizzes: [
      {
        id: "dp-1",
        question: "싱글톤(Singleton) 패턴의 주요 목적은?",
        options: [
          "객체 생성을 추상화하여 유연성 제공",
          "클래스의 인스턴스가 하나만 생성되도록 보장",
          "알고리즘을 교체 가능하게 캡슐화",
          "객체 간의 일대다 의존성 정의",
        ],
        correctAnswer: "클래스의 인스턴스가 하나만 생성되도록 보장",
        explanation:
          "싱글톤 패턴은 특정 클래스의 인스턴스가 오직 하나만 생성되도록 보장하고, 이에 대한 전역적인 접근점을 제공합니다. 데이터베이스 연결, 로그 기록, 설정 관리 등에 자주 사용됩니다.",
      },
      {
        id: "dp-2",
        question: "다음 중 생성 패턴(Creational Pattern)이 아닌 것은?",
        options: [
          "팩토리 메서드(Factory Method)",
          "빌더(Builder)",
          "옵저버(Observer)",
          "프로토타입(Prototype)",
        ],
        correctAnswer: "옵저버(Observer)",
        explanation:
          "옵저버 패턴은 행동 패턴(Behavioral Pattern)에 속합니다. 팩토리 메서드, 빌더, 프로토타입은 모두 객체 생성을 다루는 생성 패턴입니다.",
      },
      {
        id: "dp-3",
        question: "어댑터(Adapter) 패턴의 주요 목적은?",
        options: [
          "객체 구조를 간소화하여 복잡성 감소",
          "서로 다른 인터페이스를 가진 클래스들이 함께 작동하도록 변환",
          "객체의 상태 변화에 따라 알고리즘 변경",
          "객체 생성 과정과 표현 방법 분리",
        ],
        correctAnswer:
          "서로 다른 인터페이스를 가진 클래스들이 함께 작동하도록 변환",
        explanation:
          "어댑터 패턴은 호환되지 않는 인터페이스들이 함께 작동할 수 있도록 중간에서 변환 역할을 합니다. 기존 클래스를 수정하지 않고도 새로운 인터페이스로 작동하게 해줍니다.",
      },
    ],
  },
];
