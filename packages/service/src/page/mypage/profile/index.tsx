'use client';

import { useState } from 'react';
import Script from 'next/script';

import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { Address } from '@/shared/type/daum-post';
import PostInput from '@/shared/ui/post-input';

import { Input } from '@moeasy/storybook/ui/input';
import { Text } from '@moeasy/storybook/ui/text';

import { ProfileEdit } from './profile-edit';

import * as styles from './profile.css';

export function MyPageProfile() {
  const [profileInfo, setProfileInfo] = useState<
    Partial<{
      nickname: string;
      description: string;
      address: Address;
      interests: string;
    }>
  >();
  return (
    <div className={styles.profileSection}>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      />
      <ProfileEdit src="https://placehold.co/120/png" />
      <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
          <Text title="small">닉네임</Text>
          <Input
            value={profileInfo?.nickname}
            onValueChange={(nickname) => setProfileInfo({ ...profileInfo, nickname })}
            className={sprinkles({ width: '100%' })}
          />
        </div>
        <div className={styles.inputContainer}>
          <Text title="small">자기소개</Text>
          <Input
            value={profileInfo?.description}
            onValueChange={(description) => setProfileInfo({ ...profileInfo, description })}
            className={sprinkles({ width: '100%' })}
          />
        </div>
        <div className={styles.inputContainer}>
          <Text title="small">지역</Text>
          <PostInput
            address={profileInfo?.address}
            setAddress={(address) => setProfileInfo({ ...profileInfo, address })}
          />
        </div>
        <div className={styles.inputContainer}>
          <Text title="small">관심사</Text>
          <Input
            value={profileInfo?.interests}
            onValueChange={(interests) => setProfileInfo({ ...profileInfo, interests })}
            className={sprinkles({ width: '100%' })}
          />
        </div>
      </div>
      <button className={styles.submit}>프로필 수정</button>
      <div
        className={sprinkles({
          width: '100%',
          gap: 'small',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'large',
        })}
      >
        <button className={styles.logout}>로그아웃</button>
        <button className={styles.withdraw}>회원 탈퇴</button>
      </div>
    </div>
  );
}
