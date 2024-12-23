import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Cursor } from '@moeasy/storybook/ui/cursor';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './page.css';

export default function AboutPage() {
  return (
    <main className={styles.aboutMain}>
      <Cursor length={30} />
      <div className={styles.sectionVariant.first}>
        <section className={styles.section}>
          <Text asChild title="medium">
            <h1 id="intro-heading">{"'모이다' + 'Easy' MOEASY!"}</h1>
          </Text>
          <p>
            <br />
            모이지(Moeasy)에 오신걸 환영해요. <br />
            {"모이지는 '모이다'+'Easy'의 합성어로"}
            <br />
            모임을 쉽게 생성하고 관리할 수 있는 서비스 입니다.
          </p>
        </section>
      </div>
      <div className={styles.sectionVariant.second}>
        <section className={styles.section}>
          <Image width={400} height={200} src="https://via.placeholder.com/400x200" alt="모이지 서비스 소개 이미지" />
          <Text title="large">모임 및 일정의 생성&관리를 돕는 서비스</Text>
          <p>
            MOEASY에서는 모임을 만들어 한눈에 모아볼 수 있고,
            <br />
            모임 내 일정을 생성하여 디스코드 알림 기능을 통해
            <br />
            일정 전 미리 알림을 받아볼 수 있는 편리한 기능이 있답니다!
          </p>
        </section>
      </div>
      <div className={styles.sectionVariant.third}>
        <section className={styles.section}>
          <h2>
            모든 공간이
            <br />
            취향으로 모이는 커뮤니티가 되도록
          </h2>
          <p>
            취향 이야기로 모여드는 좋은 취향의 다양 많은
            <br />
            아이디어와 관점을 만나 수 있는 공간이 되도록 계속 노력할게요
          </p>
        </section>
      </div>
      <div className={styles.sectionVariant.second}>
        <section className={styles.section}>
          <div className={styles.news} role="list">
            <div className={styles.newsItem} role="listitem">
              <header>
                <span aria-hidden>2</span>
                <h3>매니저</h3>
              </header>
              <Image width={300} height={200} src="https://via.placeholder.com/300x200" alt="매니저 역할 소개 이미지" />
              <p>
                모임장으로부터 매니저 권한을 부여받을 수 있어요. <br />
                모임장과 함께 일정 관리에 대한 권한을 가집니다.
              </p>
            </div>
            <div className={styles.newsItem} role="listitem">
              <header>
                <span aria-hidden>1</span>
                <h3>모임장</h3>
              </header>
              <Image width={300} height={200} src="https://via.placeholder.com/300x200" alt="모임장 역할 소개 이미지" />
              <p>
                원하는 모임을 만들어 친구들을 초대해요.
                <br />
                모임 관리에 대한 권한, 일정 관리에 대한 권한을 가집니다
              </p>
            </div>
            <div className={styles.newsItem} role="listitem">
              <header>
                <span aria-hidden>3</span>
                <h3>모임원</h3>
              </header>
              <Image width={300} height={200} src="https://via.placeholder.com/300x200" alt="모임원 역할 소개 이미지" />
              <p>
                모임과 일정에 참여하며 서비스를 이용해요.
                <br /> 모이지를 함께 이용하고 싶은 친구를 초대해볼까요?
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.sectionVariant.third}>
        <section className={clsx(styles.section, styles.cta)}>
          <h2>소중한 모임과 약속을 잊지 않도록!</h2>
          <p>
            일정 알림을 통해 소중한 약속을 잊지 않도록 도와드릴게요.
            <br />
            내가 속한 모임은 한번에 모아보며 관리할 수 있어요.
          </p>
          <div className={styles.ctawrapper}>
            <div className={styles.ctaLink}>
              어떤 모임이 기다리고 있을까요?
              <Link href="/meeting" className={styles.ctaButton} aria-label="모임 둘러보기 페이지로 이동">
                모임 둘러보기
              </Link>
            </div>
            <div className={styles.ctaLink}>
              찾는 모임이 있으신가요?
              <Link href="/search" className={styles.ctaButton} aria-label="검색 페이지로 이동">
                검색으로 이동
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
