import React from 'react';

import { Header } from '../header/header';

import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header user={user} onCreateAccount={() => setUser({ name: 'Jane Doe' })} />

      <section className="storybook-page">
        <h2>모이지 봇에 대한 간단 소개</h2>
        <p>메인 페이지가 표시되는 영역입니다.</p>
      </section>
    </article>
  );
};
