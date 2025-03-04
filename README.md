MoEasy Front-End

- 구조 변경중

  - 외부로 공유해도 되는 component만을 관리하기 위한 public repository인 [MoEasy-storybook](https://github.com/TakeABreakKr/MoEasy-storybook)을 서브모듈로서 관리하고 실제 서비스 코드는 private repository에서만 저장하여 관리한다.

# tech stack

- 서비스: next 15
  - 스타일: [vanilla extract](https://vanilla-extract.style/)
  - 테스트: playwright with vitest
  - 배포: aws ec2
- 컴포넌트: react 19

  - 테스트: storybook
  - 빌드 및 배포: github pages

# execute

- [pnpm](https://pnpm.io/ko/installation#npm-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)이 설치되어야함

```bash
pnpm service dev // 서비스 실행
pnpm service storybook // 스토리북 실행
```

포트: 4000
