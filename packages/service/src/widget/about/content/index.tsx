import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import AboutAdmin from '@/../public/about-admin.png';
import AboutFirst from '@/../public/about-first.png';
import AboutLast from '@/../public/about-last.png';
import AboutManager from '@/../public/about-manager.png';
import AboutMember from '@/../public/about-member.png';

import { Cursor } from '@moeasy/storybook/ui/cursor';
import { Text } from '@moeasy/storybook/ui/text';

import * as styles from './content.css';

const AboutFirework = (
  <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.9492 40.3497L19.0792 9.17969L18.1992 9.83969L41.9492 40.3497Z" fill="currentColor" />
    <path d="M50.7285 51.959L73.5985 83.139L74.4785 82.469L50.7285 51.959Z" fill="currentColor" />
    <path d="M40.5394 50.5488L9.35938 73.4189L10.0294 74.2988L40.5394 50.5488Z" fill="currentColor" />
    <path d="M52.1484 41.7695L83.3185 18.8995L82.6584 18.0195L52.1484 41.7695Z" fill="currentColor" />
    <path d="M47.3496 38.9501L53.2196 0.730072L52.1296 0.580078L47.3496 38.9501Z" fill="currentColor" />
    <path d="M45.3387 53.3691L39.4688 91.5791L40.5587 91.7292L45.3387 53.3691Z" fill="currentColor" />
    <path d="M39.1295 45.1493L0.919556 39.2793L0.769531 40.3693L39.1295 45.1493Z" fill="currentColor" />
    <path d="M53.5488 47.1602L91.7688 53.0302L91.9189 51.9402L53.5488 47.1602Z" fill="currentColor" />
    <path d="M39.6403 43.3217L4.25031 27.7617L3.82031 28.7717L39.6403 43.3217Z" fill="currentColor" />
    <path d="M53.0508 48.9922L88.4408 64.5522L88.8708 63.5422L53.0508 48.9922Z" fill="currentColor" />
    <path d="M43.5112 52.8613L27.9512 88.2513L28.9612 88.6813L43.5112 52.8613Z" fill="currentColor" />
    <path d="M49.1816 39.4509L64.7416 4.06085L63.7317 3.63086L49.1816 39.4509Z" fill="currentColor" />
    <path d="M43.6105 39.4109L29.5805 3.38086L28.5605 3.79085L43.6105 39.4109Z" fill="currentColor" />
    <path d="M49.0801 52.9004L63.1001 88.9304L64.1201 88.5204L49.0801 52.9004Z" fill="currentColor" />
    <path d="M39.6003 48.8906L3.57031 62.9206L3.98032 63.9406L39.6003 48.8906Z" fill="currentColor" />
    <path d="M53.0898 43.4209L89.1198 29.4008L88.7098 28.3809L53.0898 43.4209Z" fill="currentColor" />
    <path d="M39.1194 47.0488L0.689453 51.2688L0.819458 52.3688L39.1194 47.0488Z" fill="currentColor" />
    <path d="M53.5703 45.2592L92.0003 41.0392L91.8603 39.9492L53.5703 45.2592Z" fill="currentColor" />
    <path d="M47.2383 53.3809L51.4583 91.8109L52.5483 91.6808L47.2383 53.3809Z" fill="currentColor" />
    <path d="M45.4489 38.93L41.2289 0.5L40.1289 0.639999L45.4489 38.93Z" fill="currentColor" />
    <path d="M40.5998 41.6802L10.4398 17.4902L9.75977 18.3602L40.5998 41.6802Z" fill="currentColor" />
    <path d="M52.0898 50.6309L82.2498 74.8209L82.9199 73.9509L52.0898 50.6309Z" fill="currentColor" />
    <path d="M41.8697 51.9004L17.6797 82.0604L18.5497 82.7404L41.8697 51.9004Z" fill="currentColor" />
    <path d="M50.8203 40.4101L75.0103 10.2501L74.1403 9.58008L50.8203 40.4101Z" fill="currentColor" />
  </svg>
);

const getRandomPosition = () => {
  const circleSize = Math.random() * (100 - 20) + 20;
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${circleSize}px`,
    height: `${circleSize}px`,
  };
};

const circles = Array.from({ length: 15 }, (_, i) => {
  const variant = (['blue', 'purple', 'yellow'] as const)[Math.floor(Math.random() * 3)];
  const position = getRandomPosition();

  return <div key={i} className={styles.circleVariants[variant]} style={position} aria-hidden />;
});

export function AboutContents() {
  return (
    <>
      <Cursor length={30} />
      <div className={styles.sectionVariant.first}>
        {circles}
        <div className={styles.firstFireworkPosition}>{AboutFirework}</div>
        <section className={styles.section}>
          <Text asChild title="large" semibold>
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
          <Image width={600} height={400} src={AboutFirst} alt="모이지 서비스 소개 이미지" />
          <Text asChild title="large" semibold>
            <h1>모임 및 일정의 생성&관리를 돕는 서비스</h1>
          </Text>
          <p>
            MOEASY에서는 모임을 만들어 한눈에 모아볼 수 있고,
            <br />
            모임 내 일정을 생성하여 디스코드 알림 기능을 통해
            <br />
            일정 전 미리 알림을 받아볼 수 있는 편리한 기능이 있답니다!
          </p>
        </section>
      </div>
      <div className={styles.sectionVariant.second}>
        <section className={styles.section}>
          <div className={styles.role} role="list">
            <div className={styles.roleItemVariant.first} role="listitem">
              <header className={styles.roleItemHeader}>
                <span className={styles.roleNum} aria-hidden>
                  1
                </span>
                <Text asChild title="large" semibold>
                  <h3>모임장</h3>
                </Text>
              </header>
              <Image width={400} height={300} src={AboutAdmin} alt="모임장 역할 소개 이미지" />
              <p>
                원하는 모임을 만들어 친구들을 초대해요.
                <br />
                모임 관리에 대한 권한, 일정 관리에 대한 권한을 가집니다
              </p>
            </div>
            <div className={styles.roleItemVariant.second} role="listitem">
              <header className={styles.roleItemHeader}>
                <span className={styles.roleNum} aria-hidden>
                  2
                </span>
                <Text asChild title="large" semibold>
                  <h3>매니저</h3>
                </Text>
              </header>
              <Image width={400} height={300} src={AboutManager} alt="매니저 역할 소개 이미지" />
              <p>
                모임장으로부터 매니저 권한을 부여받을 수 있어요. <br />
                모임장과 함께 일정 관리에 대한 권한을 가집니다.
              </p>
            </div>
            <div className={styles.roleItemVariant.third} role="listitem">
              <header className={styles.roleItemHeader}>
                <span className={styles.roleNum} aria-hidden>
                  3
                </span>
                <Text asChild title="large" semibold>
                  <h3>모임원</h3>
                </Text>
              </header>
              <Image width={400} height={300} src={AboutMember} alt="모임원 역할 소개 이미지" />
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
          <Image width={300} height={200} src={AboutLast} alt="소중한 모임과 약속을 잊지 않도록!" />
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
    </>
  );
}
