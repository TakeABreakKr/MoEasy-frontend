import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import mainStyles from '../page.module.css';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <main className={mainStyles.main}>
      <section className={styles.section}>
        <div className={styles['big-image']}>
          <Image width={1200} height={300} src="https://via.placeholder.com/1200x300" alt="모이지에 오신걸 환영해요" />
        </div>
        <h2>
          취향이 닮긴 공간에 모여
          <br />
          대화를 나누는 커뮤니티
        </h2>
        <p>
          나만의 관심사를 공유하고 이야기할 호스트들을 중심으로
          <br />
          취향이 맞는 사람들과 연결되고, 모임과 서비스를 가볍게 즐기실 수 있어요.
          <br />
          모이지 전문위토 공간에 모여 즐겁고 유익하게 대화하며 취향을 나눠요.
        </p>

        <div className={styles['host-guest']}>
          <div className={styles.role}>
            <Image width={100} height={100} src="https://via.placeholder.com/100" alt="모이지에 오신걸 환영해요" />
            <h3>호스트</h3>
            <p>
              취향하는 주제를 선택해 남다른
              <br />
              시선을 공유하고 소소한 즐거움의
              <br />
              모임을 이끌어가는 사람
            </p>
          </div>
          <div className={styles.role}>
            <Image width={100} height={100} src="https://via.placeholder.com/100" alt="guest" />
            <h3>게스트</h3>
            <p>
              재미있고 특별한 취향의 주제.
              <br />
              모인 공간을 구경하고 사람과 대화하며
              <br />
              즐거운 시간을 보내요
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>
          취향이 맞는 사람과
          <br />
          대화 나누는 게 위워지도록
        </h2>
        <p>
          누구나 편안하게 어울리길 바라는 만남을 위해서 작은
          <br />
          애정에서 시작해 호스틀들이 만들어가는 대화공간
        </p>
      </section>

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
        <div className={styles['big-image']}>
          <Image width={1200} height={300} src="https://via.placeholder.com/1200x300" alt="Community illustration" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>성장하는 남의집</h2>
        <div className={styles.stats}>
          <div className={styles['stat-item']}>
            <h3>
              취향하며 진행된
              <br />
              남의집 모임
            </h3>
            <p>5,630개</p>
          </div>
          <div className={styles['stat-item']}>
            <h3>
              남의집에서 모임을
              <br />
              진행한 호스트
            </h3>
            <p>1,689명</p>
          </div>
          <div className={styles['stat-item']}>
            <h3>
              남의집 모임에
              <br />
              참여한 게스트
            </h3>
            <p>13,974명</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>언론에서 만난 남의집</h2>
        <div className={styles.news}>
          <div className={styles['news-item']}>
            <Image width={400} height={200} src="https://via.placeholder.com/400x200" alt="Community illustration" />
            <h3>
              {"주말에만 '모이지' 문 여는"}
              <br />
              소셜 호스팅 서비스
            </h3>
            <p>Published on 경향비즈니스</p>
          </div>
          <div className={styles['news-item']}>
            <Image width={400} height={200} src="https://via.placeholder.com/400x200" alt="Community illustration" />
            <h3>
              {"'틈새남'대화가 필요할 때"}
              <br />
              어떤 곳 가야하나
            </h3>
            <p>Published on Digital Healthcare Platform</p>
          </div>
          <div className={styles['news-item']}>
            <Image width={400} height={200} src="https://via.placeholder.com/400x200" alt="Community illustration" />
            <h3>
              {"취향기반 서비스 '모이지'"}
              <br />
              평균 재시 85%까지...
            </h3>
            <p>Published on Media</p>
          </div>
        </div>
      </section>

      <section className={clsx(styles.section, styles.cta)}>
        <h2>취향 나누러 가볼까요?</h2>
        <Link href="#" className={styles['cta-button']}>
          모이지 들어가기
        </Link>
      </section>
    </main>
  );
}
