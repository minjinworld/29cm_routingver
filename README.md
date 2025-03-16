29CM 클론 코딩 프로젝트

📌 프로젝트 소개

이 프로젝트는 29CM 쇼핑몰 웹사이트를 클론 코딩한 프로젝트입니다. Next.js 기반으로 개발되었으며, 페이지 라우팅, 상태 관리, UI 구현을 포함하여 실제 서비스와 유사한 사용자 경험을 제공하는 것을 목표로 했습니다.

🚀 배포 링크

👉 데모 사이트 보기 (배포한 경우 여기에 링크 추가)

🛠 기술 스택

프레임워크 & 라이브러리: Next.js, React, React-DOM

스타일링: CSS Modules / Styled-components (선택한 스타일링 기법 명시)

상태 관리: useState, useEffect, useRef

라우팅: Next.js 내장 라우팅 (pages 기반 라우팅)

📁 폴더 구조

📂 29cm/
 ├── 📂 pages/         # Next.js 페이지 라우팅
 │   ├── index.js     # 홈 페이지
 │   ├── product.js   # 상품 상세 페이지
 │   ├── cart.js      # 장바구니 페이지
 ├── 📂 components/    # 재사용 가능한 UI 컴포넌트
 │   ├── Header.js    # 헤더
 │   ├── Footer.js    # 푸터
 │   ├── ProductCard.js # 상품 카드 컴포넌트
 ├── 📂 styles/       # 스타일 관련 파일
 │   ├── globals.css  # 전역 스타일
 ├── 📂 public/       # 정적 파일 (이미지, 아이콘 등)
 ├── package.json    # 프로젝트 정보 및 의존성 관리
 ├── next.config.mjs # Next.js 설정 파일
 ├── README.md       # 프로젝트 설명

🌟 주요 기능

홈 페이지 - 상품 목록을 표시하며, 각 상품 클릭 시 상세 페이지로 이동

상품 상세 페이지 - 상품 정보 및 구매 옵션 제공

수량 조절 기능 - useState를 활용하여 플러스/마이너스 버튼 클릭 시 수량 증가 및 감소

반응형 디자인 - 다양한 화면 크기에 최적화

📌 개발 과정

Next.js의 페이지 라우팅 활용: pages/ 디렉터리 구조를 기반으로 자동 라우팅을 설정

useRef & useEffect 활용: 특정 UI 요소의 동작을 제어하기 위해 사용

SEO 최적화: Next.js의 head 태그를 활용하여 메타 태그 설정

✨ 배운 점 & 개선할 점

Next.js의 SSR(Server-Side Rendering)과 CSR(Client-Side Rendering) 차이점 이해

React의 상태 관리와 useRef를 이용한 DOM 직접 조작 경험

향후 개선할 부분: API 연동을 추가하여 더 동적인 데이터 처리

📜 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었으며, 상업적 이용은 금지됩니다.

