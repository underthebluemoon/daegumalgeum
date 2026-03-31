# 대구맑음

대구 지역의 대기질과 날씨 정보를 한눈에 확인할 수 있는 PWA 웹앱입니다.

## 개요

- **개발 기간:** 2025.09.30 ~ 2025.10.29
- **팀 구성:** 4인 (풀스택 강의 과정 중 팀 프로젝트)
- **팀명:** 이게 되네?
- [원본 팀 레포지토리](https://github.com/wahitworks/wahitworks)

## 주요 기능

- 현재 대기질 현황 조회
- 3일간 대기질 예보
- 초미세먼지 경보 알림
- 일기 예보
- 카카오맵 기반 측정소 북마크 및 미세먼지 조회

## 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | React 19, Vite |
| 상태 관리 | Redux Toolkit, React-Redux, Redux Thunk |
| 스타일링 | Bootstrap 5, CSS |
| 라우팅 | React Router DOM v7 |
| HTTP 통신 | Axios |
| 지도 | react-kakao-maps-sdk |
| 차트 | Recharts |
| 애니메이션 | Framer Motion |
| 드래그 앤 드롭 | @dnd-kit |
| PWA | vite-plugin-pwa (Service Worker) |

## API

- [한국환경공단 대기오염정보 API](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15073861)
- [Open-Meteo (날씨)](https://open-meteo.com/)
- [Kakao Maps SDK](https://developers.kakao.com/docs/latest/ko/kakaomap/common)

## 실행 방법

```bash
git clone <repository-url>
cd wahitworks
npm install
```

`.env.example`을 참고하여 `.env` 파일을 생성합니다.

```bash
cp .env.example .env
# .env 파일에 API 키 입력
```

```bash
npm run dev
```
