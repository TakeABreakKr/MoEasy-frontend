import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@moeasy/storybook/ui/button';

import * as mainStyle from '../main.css';
import * as styles from './page.css';

export default function MyPageComponent() {
  return (
    <main className={mainStyle.main}>
      <section>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div className={styles.header}>
              <div className={styles.mascot}>
                <Image width={50} height={50} src="https://via.placeholder.com/50" alt="People sitting at a table" />
                <div>
                  <h2>모이지님,</h2>
                  <p>다가오는 일정이 있어요!</p>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.groupInfo}>
                <Image
                  width={60}
                  height={60}
                  className={styles.groupInfoImg}
                  src="https://via.placeholder.com/60"
                  alt="People sitting at a table"
                />
                <div>
                  <h3>그룹 이름이 들어가는 자리입니다.</h3>
                  <p className={styles.members}>6명: 최성용, 김민중, 신승민, 윤찬결, 진명서, 모이지</p>
                </div>
              </div>
              <div className={styles.schedule}>
                <h4>일정 이름이 들어가는 자리입니다.</h4>
                <p>2024. 06. 22(토) 오전 08시 30분</p>
                <p>
                  일정에 대한 설명이 들어가는 자리입니다. 일정에 대한 설명이 들어가는 자리입니다. 일정에 대한 설명이
                  들어가는 자리입니다. 일정에 대한 설명이 들어가는 자리입니다.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.groupInfo}>
                <Image
                  width={60}
                  height={60}
                  className={styles.groupInfoImg}
                  src="https://via.placeholder.com/60"
                  alt="People sitting at a table"
                />
                <div>
                  <h3>그룹 이름이 들어가는 자리입니다.</h3>
                  <p className={styles.members}>6명: 최성용, 김만중, 신승민, 윤한결, 진명서, 모이지</p>
                </div>
              </div>
              <div className={styles.schedule}>
                <h4>일정 이름이 들어가는 자리입니다.</h4>
                <p>2024. 06. 22(토) 오전 08시 30분</p>
                <p>
                  일정에 대한 설명이 들어가는 자리입니다. 일정에 대한 설명이 들어가는 자리입니다. 일정에 대한 설명이
                  들어가는 자리입니다. 일정에 대한 설명이 들어가는 자리입니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.header}>
              <h2>친구와 함께 그룹을 만들고, 일정을 생성해보세요</h2>
              <Button>공유</Button>
            </div>
            <div className={styles.verticalWrapper}>
              <Link href={'/meeting/create'} className={styles.actionButton}>
                그룹 생성
                <span className={styles.actionButtonSpan}>+</span>
              </Link>
              <button className={styles.actionButton}>
                일정 생성
                <span className={styles.actionButtonSpan}>+</span>
              </button>
            </div>
            <div className={styles.header}>
              <h2>내가 속한 그룹, 친구, 지난 일정을 한눈에 👀</h2>
            </div>
            <button className={styles.actionButton}>
              그룹 관리
              <span className={styles.actionButtonSpan}>{'>'}</span>
            </button>
            <button className={styles.actionButton}>
              친구 관리
              <span className={styles.actionButtonSpan}>{'>'}</span>
            </button>
            <button className={styles.actionButton}>
              지난 일정
              <span className={styles.actionButtonSpan}>{'>'}</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
