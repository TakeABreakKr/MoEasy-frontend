'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { useFormState } from 'react-dom';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import { CommonFormAction } from '@/entities';
import { CreateMeetingType } from '@/entities/meeting/api';
import * as styles from '@/shared/style/create-form/index.css';
import { onSearchValueChange } from '@/shared/utils/search-param';

import {
  Alert,
  AlertCloseButton,
  AlertContent,
  AlertMessage,
  AlertTitle,
  AlertTrigger,
} from '@moeasy/storybook/ui/alert/alert';
import { closeWrapper } from '@moeasy/storybook/ui/alert/alert.css';
import { Button, SearchButton } from '@moeasy/storybook/ui/button';
import { CreateStepButton, FormCreateUnderLine } from '@moeasy/storybook/ui/create/step-button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { ImageUpload } from '@moeasy/storybook/ui/file-upload';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { Input } from '@moeasy/storybook/ui/input';
import { Label } from '@moeasy/storybook/ui/label/label';
import { List, ListContent, ListFooter, ListItemType } from '@moeasy/storybook/ui/list';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Textarea } from '@moeasy/storybook/ui/textarea';

type CreateFormProps = {
  action: CommonFormAction;
  data?: Partial<Omit<CreateMeetingType, 'thumbnail'> & { thumbnail: string }>;
};
const createStepArray = ['모임명 / 소개', '썸네일 설정', '카테고리 / 키워드', '인원제한 / 모임원'];

function CreateForm({ action, data = {} }: CreateFormProps) {
  const searchParams = useSearchParams();
  const [message, formAction] = useFormState(action, { type: 'waiting' });
  const currentStep = Number(searchParams.get('step') || '1');
  return (
    <div className={styles.container}>
      <form className={formStyles.formStyle} action={formAction}>
        <div className={formStyles.body}>
          <CreateStepList steps={createStepArray} currentStep={currentStep} />
          <CreateFormInput currentStep={currentStep} searchParams={searchParams} />
        </div>
        <CreateStepButton
          steps={createStepArray}
          step={currentStep}
          searchParams={searchParams}
          finishMessage="모임 생성"
          messageOnPending="모임 생성 중.."
        />
      </form>
      <FormCreateUnderLine />
      {message.type === 'success' && (
        <Alert isOpen>
          <AlertContent size="alert">
            <div className={closeWrapper}>
              <AlertCloseButton variant="dark" rounded="full" size="small" type="button">
                <XIcon width={15} height={15} />
              </AlertCloseButton>
            </div>
            <AlertMessage>{message.message}</AlertMessage>
            <Button size="large" rounded="medium" asChild>
              <Link href="/meeting">확인</Link>
            </Button>
          </AlertContent>
        </Alert>
      )}
    </div>
  );
}

function CreateFormInput({ currentStep, searchParams }: { currentStep: number; searchParams: URLSearchParams }) {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [members, setMembers] = useState<ListItemType[]>([]);
  const keywordAddDisabled = keywords.length >= 10;
  const limitDisabled = searchParams.get('limit') === 'disabled';
  const memberLimit = parseInt(limitDisabled ? '10' : searchParams.get('limit') || '10');

  const activeCurrentStepClassName = (step: number) =>
    clsx(formStyles.formGroup, currentStep !== step && formStyles.formGroupInvisible);

  return (
    <div className={formStyles.formWrapper}>
      <div className={activeCurrentStepClassName(1)}>
        <label className={formStyles.label}>
          <span>모임 이름</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="모임 이름을 입력해주세요"
            name="name"
            maxLength={30}
            defaultValue={searchParams.get('name') || ''}
            onValueChange={onSearchValueChange('name', searchParams)}
          />
        </label>
        <label className={formStyles.label}>
          <span>모임 소개</span>
          <Textarea
            className={formStyles.input}
            placeholder="모임 소개를 입력해주세요"
            name="explanation"
            minLength={10}
            maxLength={100}
            defaultValue={searchParams.get('explanation') || ''}
            onValueChange={onSearchValueChange('explanation', searchParams)}
          />
        </label>
      </div>
      <div className={activeCurrentStepClassName(2)}>
        <div className={formStyles.label}>
          <span>썸네일</span>
          <ImageUpload selectedFile={thumbnail} onImageUpload={setThumbnail} />
        </div>
      </div>
      <div className={activeCurrentStepClassName(3)}>
        <label>
          <span className={formStyles.label}>
            키워드 설정
            {keywordAddDisabled && <Label variant="error">키워드는 최대 10개까지 등록 가능합니다.</Label>}
          </span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="검색창에 #키워드 를 검색하면 나의 모임이 보여요-!"
            name="keyword"
            defaultValue={searchParams.get('keyword') || ''}
            onValueChange={onSearchValueChange('keyword', searchParams)}
            disabled={keywordAddDisabled}
            isError={keywords.length >= 10}
            onKeyUp={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                const keyword = e.currentTarget.value;
                if (keyword) {
                  setKeywords((prev) => {
                    if (prev.includes(keyword)) return prev;
                    return [...prev, keyword];
                  });
                  onSearchValueChange('keyword', searchParams)('');
                }
                e.currentTarget.value = '';
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
        </label>
        <div className={styles.tagWrapper}>
          <div className={styles.tagList}>
            {keywords.map((keyword) => (
              <Tag
                isDelete
                key={keyword}
                value={keyword}
                data-testid="keyword-item"
                onClick={() => setKeywords((prev) => prev.filter((item) => item !== keyword))}
              >
                <input readOnly hidden value={keyword} name="keywords" />
                {keyword}
              </Tag>
            ))}
            <div className={styles.tagListGradient} />
          </div>
        </div>
      </div>
      <div className={activeCurrentStepClassName(4)}>
        <fieldset className={formStyles.labelWrapper}>
          <span className={formStyles.label}>모임 인원</span>
          <div style={{ display: 'flex', gap: 10 }}>
            {limitDisabled ? (
              <Input
                className={formStyles.input}
                disabled={limitDisabled}
                placeholder="∞"
                name="limit"
                readOnly
                value="∞"
              />
            ) : (
              <Input
                type="number"
                className={formStyles.input}
                placeholder="모임 인원을 입력해주세요"
                name="limit"
                min={1}
                value={memberLimit}
                onValueChange={onSearchValueChange('limit', searchParams)}
              />
            )}
            <Button
              asChild
              type="button"
              variant={limitDisabled ? 'primary' : 'secondary'}
              size="small"
              rounded="medium"
            >
              <Link
                href={{
                  pathname: '/meeting/create',
                  query: { ...Object.fromEntries(searchParams), limit: limitDisabled ? '10' : 'disabled' },
                }}
              >
                제한 없음
              </Link>
            </Button>
          </div>
        </fieldset>
        <fieldset className={formStyles.labelWrapper}>
          <span className={formStyles.label}>누구와 함께</span>
          <FriendListPopup selected={members} dispatch={setMembers} limit={limitDisabled ? undefined : memberLimit} />
          <div className={styles.tagWrapper}>
            <div className={styles.tagList}>
              {members.map((member) => (
                <Tag
                  isDelete
                  key={member.id}
                  data-testid="member-item"
                  onClick={() => setMembers((prev) => prev.filter((item) => item.id !== member.id))}
                >
                  <input readOnly hidden value={member.id} name="members" />
                  {member.name}
                </Tag>
              ))}
            </div>
            <div className={styles.tagListGradient} />
          </div>
        </fieldset>
      </div>
    </div>
  );
}

function FriendListPopup({
  selected,
  dispatch,
  limit,
}: {
  selected: ListItemType[];
  dispatch: Dispatch<SetStateAction<ListItemType[]>>;
  limit?: number;
}) {
  return (
    <Alert>
      <AlertTrigger asChild>
        <SearchButton>유저 닉네임을 검색해보세요.</SearchButton>
      </AlertTrigger>
      <AlertContent size="medium">
        <AlertTitle>모임원 추가</AlertTitle>
        <List
          list={[
            { id: '2', name: 'aa' },
            { id: '3', name: 'javme' },
          ]}
          selected={selected}
          limit={limit}
        >
          <ListContent></ListContent>
          <ListFooter asChild close={dispatch}>
            <AlertCloseButton>확인</AlertCloseButton>
          </ListFooter>
        </List>
      </AlertContent>
    </Alert>
  );
}

export default CreateForm;
