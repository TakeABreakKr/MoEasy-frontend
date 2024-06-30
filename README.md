MoEasy Front-End

- 구조 변경중

  - 외부로 공유해도 되는 component만을 관리하기 위한 public repository인 [MoEasy-storybook](https://github.com/TakeABreakKr/MoEasy-storybook)을 서브모듈로서 관리하고 실제 서비스 코드는 private repository에서만 저장하여 관리한다.

# tech stack

- 서비스: next 14
  - 스타일: 미정 (tailwind vs pigment css)
  - 테스트: 미정 (rtl vs playwright) with vitest
  - 배포: aws ec2
- 컴포넌트: react 18.3.1
  - 스타일: css module
  - 테스트: storybook
  - 빌드 및 배포: github pages

포트: 4000
