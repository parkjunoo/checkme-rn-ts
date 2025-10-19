# CheckMe React Native App

React Native TypeScript 프로젝트에 Tamagui 기반 모던 디자인 시스템이 적용된 앱입니다.

## 🎨 디자인 시스템

이 프로젝트는 피그마 디자인 시스템을 기반으로 한 완전한 디자인 시스템을 포함하고 있습니다:

### 색상 팔레트
- **Primary**: 모던 블루 (#3B82F6)
- **Secondary**: 모던 퍼플 (#A855F7)
- **Success**: 모던 그린 (#10B981)
- **Warning**: 앰버 (#F59E0B)
- **Error**: 모던 레드 (#EF4444)
- **Neutral**: 그레이스케일 팔레트

### 컴포넌트 라이브러리
- **Button**: 다양한 변형 (primary, secondary, outline, ghost, destructive)
- **Input**: 다양한 스타일 (default, filled, outlined) 및 유효성 검사
- **Card**: 다양한 elevation 레벨과 스타일
- **Badge**: 상태 표시기 (다양한 변형)
- **Avatar**: 사용자 프로필 이미지 (fallback 포함)
- **Toast**: 알림 시스템
- **Modal**: 오버레이 다이얼로그
- **Spinner**: 로딩 인디케이터

### 타이포그래피
- Inter 폰트 패밀리
- 반응형 폰트 크기
- 일관된 line height와 letter spacing

## 📁 폴더 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── common/          # 레거시 컴포넌트
│   ├── ui/              # 새로운 디자인 시스템 컴포넌트
│   └── examples/        # 컴포넌트 예제 및 데모
├── theme/               # 디자인 시스템 토큰 및 설정
│   ├── tokens.ts        # 디자인 토큰 (색상, 간격, 타이포그래피)
│   ├── config.ts        # Tamagui 테마 설정
│   └── index.ts         # 테마 export
├── screens/             # 화면 컴포넌트
│   ├── auth/            # 인증 관련 화면 (Login, Register)
│   ├── home/            # 홈 화면
│   ├── profile/         # 프로필 화면
│   └── settings/        # 설정 화면
├── navigation/          # 네비게이션 설정
├── services/            # API 서비스 및 비즈니스 로직
├── hooks/               # 커스텀 훅
├── utils/               # 유틸리티 함수
├── types/               # TypeScript 타입 정의
├── constants/           # 상수 정의
└── assets/              # 정적 자산
    ├── images/          # 이미지 파일
    ├── icons/           # 아이콘 파일
    └── fonts/           # 폰트 파일
```

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```

### 플랫폼별 실행
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 📦 주요 의존성

- **React Native**: 크로스 플랫폼 모바일 앱 개발
- **TypeScript**: 타입 안전성
- **Expo**: 개발 환경 및 빌드 도구
- **Tamagui**: 모던 UI 프레임워크
- **React Navigation**: 화면 네비게이션
- **AsyncStorage**: 로컬 데이터 저장
- **Inter Font**: 모던 타이포그래피

## 🎯 사용 예제

### 기본 버튼
```tsx
import { Button } from './src/components/ui';

<Button variant="primary" size="md" onPress={handlePress}>
  클릭하세요
</Button>
```

### 유효성 검사가 있는 입력 필드
```tsx
import { Input } from './src/components/ui';

<Input
  label="이메일"
  placeholder="이메일을 입력하세요"
  variant="outlined"
  error={emailError}
/>
```

### 카드 컴포넌트
```tsx
import { Card } from './src/components/ui';

<Card variant="elevated" size="lg">
  <Text>카드 내용</Text>
</Card>
```

## 🏗️ 아키텍처

### 컴포넌트 구조
- **common/**: 레거시 재사용 가능한 기본 컴포넌트
- **ui/**: 새로운 디자인 시스템 기반 컴포넌트
- **examples/**: 컴포넌트 예제 및 데모

### 테마 시스템
- **tokens.ts**: 디자인 토큰 정의
- **config.ts**: Tamagui 테마 설정
- **Light/Dark**: 테마 지원

### 서비스 레이어
- **apiClient**: HTTP 요청 관리
- **authService**: 인증 관련 로직
- **userService**: 사용자 관련 로직

### 상태 관리
- **hooks/**: 커스텀 훅을 통한 상태 관리
- **useAuth**: 인증 상태 관리
- **useApi**: API 호출 상태 관리
- **useTheme**: 테마 상태 관리

## 🎨 스타일링

### 디자인 토큰
```typescript
// 색상 시스템
const colors = {
  primary: {
    500: '#3B82F6', // 메인 primary
    600: '#2563EB', // hover
    700: '#1D4ED8', // active
  },
  // ...
};

// 간격 시스템
const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  // ...
};
```

## 🔧 개발 가이드

### 새로운 화면 추가
1. `src/screens/` 하위에 폴더 생성
2. 화면 컴포넌트 작성
3. `src/screens/index.ts`에 export 추가
4. `src/navigation/index.tsx`에 라우트 추가

### 새로운 컴포넌트 추가
1. `src/components/ui/` 하위에 컴포넌트 작성
2. `src/components/ui/index.ts`에 export 추가
3. 디자인 토큰 사용하여 스타일링

### API 서비스 추가
1. `src/services/` 하위에 서비스 파일 작성
2. `src/services/index.ts`에 export 추가

## 📱 기능

- ✅ 인증 시스템 (로그인/회원가입)
- ✅ 네비게이션 (Stack + Tab)
- ✅ 모던 디자인 시스템
- ✅ Tamagui UI 프레임워크
- ✅ 재사용 가능한 컴포넌트 라이브러리
- ✅ TypeScript 지원
- ✅ Light/Dark 테마 시스템
- ✅ 로컬 스토리지
- ✅ API 클라이언트
- ✅ 에러 핸들링
- ✅ 로딩 상태 관리
- ✅ 반응형 디자인

## 🎯 디자인 시스템 데모

모든 컴포넌트를 확인하려면 `DesignSystemDemo` 컴포넌트를 사용하세요:

```tsx
import { DesignSystemDemo } from './src/components';

// 앱에서 모든 컴포넌트 확인
<DesignSystemDemo />
```