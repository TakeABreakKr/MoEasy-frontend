'use client';

import { useEffect, useReducer, useState } from 'react';
import Link from 'next/link';
import { createFunnelSteps, useFunnel } from '@use-funnel/browser';
import { overlay } from 'overlay-kit';

import { CommonFormAction } from '@/entities';
import { CreateMeetingType } from '@/entities/meeting/api';
import * as styles from '@/shared/style/create-form/index.css';
import * as popupStyles from '@/shared/style/popup/index.css';
import { objectReducer } from '@/shared/utils/object-reducer';

import { Button } from '@moeasy/storybook/ui/button';
import { FormCreateUnderLine } from '@moeasy/storybook/ui/create/step-button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';
import { Modal, ModalClose, ModalContent, ModalOverlay, ModalPortal } from '@moeasy/storybook/ui/dialog';
import { ImageUpload } from '@moeasy/storybook/ui/file-upload';
import { XIcon } from '@moeasy/storybook/ui/icon';
import { Input } from '@moeasy/storybook/ui/input';
import { Label } from '@moeasy/storybook/ui/label/label';
import { Tag } from '@moeasy/storybook/ui/tag';
import { Textarea } from '@moeasy/storybook/ui/textarea';

type CreateMeetingData = Partial<Omit<CreateMeetingType, 'thumbnail'>> & { thumbnail?: string };

type CreateFormProps = {
  action: CommonFormAction;
  data: CreateMeetingData;
};
const createStepArray = [
  { key: 'greeting', text: '모임명/소개' },
  { key: 'thumbnail', text: '썸네일 설정' },
  { key: 'keywords', text: '카테고리 / 키워드' },
  { key: 'limit', text: '인원제한 / 모임원' },
] as const;

const steps = createFunnelSteps<CreateMeetingData>()
  .extends('greeting')
  .extends('thumbnail', { requiredKeys: 'name' })
  .extends('keywords')
  .extends('limit')
  .build();

function CreateForm({ data = {} }: CreateFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const funnel = useFunnel({
    id: 'create-meeting',
    steps,
    initial: {
      step: 'greeting',
      context: data,
    },
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className={styles.container}>
        <form className={formStyles.formStyle}>
          <div className={formStyles.body}>이전 입력 값 불러오는 중...</div>
        </form>
      </div>
    );

  return (
    <div className={styles.container}>
      <form className={formStyles.formStyle}>
        <div className={formStyles.body}>
          <CreateStepList steps={createStepArray} currentStep={funnel.step} />
          <div className={formStyles.formWrapper}>
            <funnel.Render
              greeting={({ history, context }) => (
                <모임명및소개
                  name={context.name}
                  explanation={context.explanation}
                  onNextStep={(param) => history.push('thumbnail', { name: param.name })}
                />
              )}
              thumbnail={({ history, context = {} }) => (
                <ThumbnailInputForm
                  thumbnail={context.thumbnail}
                  file={file}
                  onPrevStep={() => history.back()}
                  onNextStep={({ file }) => {
                    setFile(file);
                    history.push('keywords', context);
                  }}
                />
              )}
              keywords={({ history, context }) => (
                <키워드입력
                  keywords={context.keywords}
                  onPrevStep={() => history.back()}
                  onNextStep={(param) => history.push('limit', { ...context, ...param })}
                />
              )}
              limit={({ history, context }) => (
                <인원제한입력
                  payload={{
                    name: '',
                    explanation: '',
                    keywords: [],
                    members: [],
                    thumbnail: file!,
                    limit: 10,
                  }}
                  onPrevStep={() => history.back()}
                />
              )}
            />
          </div>
        </div>
      </form>
      <FormCreateUnderLine />
    </div>
  );
}

type 모임명및소개입력값 = Pick<CreateMeetingData, 'name' | 'explanation'>;

function 모임명및소개({
  name = '',
  explanation = '',
  onNextStep,
}: 모임명및소개입력값 & { onNextStep: (param: { name: string; explanation?: string }) => void }) {
  const [state, dispatch] = useReducer(objectReducer<{ name: string; explanation: string }>, {
    name,
    explanation,
  });
  return (
    <>
      <div className={formStyles.formGroup}>
        <label className={formStyles.label}>
          <span>모임 이름</span>
          <Input
            type="text"
            className={formStyles.input}
            placeholder="모임 이름을 입력해주세요"
            name="name"
            maxLength={30}
            value={state.name}
            onValueChange={(name) => dispatch({ name })}
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
            value={state.explanation}
            onValueChange={(explanation) => dispatch({ explanation })}
          />
        </label>
      </div>
      <div className={formStyles.navigation}>
        <Link className={formStyles.navButton} href="/mypage">
          이전
        </Link>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => {
            onNextStep(state);
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

type ThumbnailInputType = { file: File | null };

function ThumbnailInputForm({
  thumbnail,
  file: fileProp,
  onPrevStep,
  onNextStep,
}: ThumbnailInputType & {
  thumbnail?: string;
  onPrevStep: () => void;
  onNextStep: (param: ThumbnailInputType) => void;
}) {
  const [file, setFile] = useState<File | null>(fileProp);

  return (
    <>
      <div className={formStyles.formGroup}>
        <div className={formStyles.label}>
          <span>썸네일</span>
          <ImageUpload selectedFile={file} onImageUpload={setFile} initialPreview={thumbnail} />
        </div>
      </div>
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button type="button" className={formStyles.navButton} onClick={() => onNextStep({ file })}>
          다음
        </button>
      </div>
    </>
  );
}

type 키워드입력값 = Pick<CreateMeetingData, 'keywords'>;

function 키워드입력({
  keywords: keywordsProp = [],
  onPrevStep,
  onNextStep,
}: 키워드입력값 & { onPrevStep: () => void; onNextStep: (param: 키워드입력값) => void }) {
  const [keywords, setKeywords] = useState<string[]>(keywordsProp);
  const [innerKeyword, setKeyword] = useState('');
  const keywordAddDisabled = keywords.length >= 10;

  return (
    <>
      <div className={formStyles.formGroup}>
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
            value={innerKeyword}
            onValueChange={setKeyword}
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
                  setKeyword('');
                }
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
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button type="button" className={formStyles.navButton} onClick={() => onNextStep({ keywords })}>
          다음
        </button>
      </div>
    </>
  );
}

function 인원제한입력({
  payload,
  onPrevStep,
}: {
  payload: Omit<CreateMeetingType, 'limit'> & { limit?: number };
  onPrevStep: () => void;
}) {
  const [limit, setLimit] = useState(payload.limit || 10);
  const [limitDisabled, setLimitDisabled] = useState(false);

  return (
    <>
      <div className={formStyles.formGroup}>
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
                value={limit}
                onValueChange={(limit) => setLimit(limit)}
              />
            )}
            <Button
              type="button"
              variant={limitDisabled ? 'primary' : 'secondary'}
              size="small"
              rounded="medium"
              onClick={() => setLimitDisabled(!limitDisabled)}
            >
              제한 없음
            </Button>
          </div>
        </fieldset>
        {/* <fieldset className={formStyles.labelWrapper}>
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
        </fieldset> */}
      </div>
      <div className={formStyles.navigation}>
        <button type="button" className={formStyles.navButton} onClick={onPrevStep}>
          이전
        </button>
        <button
          type="button"
          className={formStyles.navButton}
          onClick={() => {
            overlay.open(({ isOpen, unmount }) => {
              return (
                <Modal open={isOpen}>
                  <ModalPortal>
                    <ModalOverlay className={popupStyles.popupOverlay}>
                      <ModalContent className={popupStyles.popupContainer}>
                        <div className={popupStyles.popupHeader}>
                          <Button asChild variant="dark" rounded="full" size="icon" type="button">
                            <ModalClose onClick={unmount}>
                              <XIcon />
                            </ModalClose>
                          </Button>
                        </div>
                        <div className={popupStyles.popupContent}>
                          <div className={popupStyles.popupDesc}>모임 생성에 성공했습니다.</div>
                        </div>
                        <div className={popupStyles.footer}>
                          <Button size="large" rounded="medium" asChild>
                            <Link href="/meeting" onClick={unmount}>
                              확인
                            </Link>
                          </Button>
                        </div>
                      </ModalContent>
                    </ModalOverlay>
                  </ModalPortal>
                </Modal>
              );
            });
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

// function FriendListPopup({
//   selected,
//   dispatch,
//   limit,
// }: {
//   selected: ListItemType[];
//   dispatch: Dispatch<SetStateAction<ListItemType[]>>;
//   limit?: number;
// }) {
//   return (
//     <Alert>
//       <AlertTrigger asChild>
//         <SearchButton>유저 닉네임을 검색해보세요.</SearchButton>
//       </AlertTrigger>
//       <AlertContent size="medium">
//         <AlertTitle>모임원 추가</AlertTitle>
//         <List
//           list={[
//             { id: '2', name: 'aa' },
//             { id: '3', name: 'javme' },
//           ]}
//           selected={selected}
//           limit={limit}
//         >
//           <ListContent></ListContent>
//           <ListFooter asChild close={dispatch}>
//             <AlertCloseButton>확인</AlertCloseButton>
//           </ListFooter>
//         </List>
//       </AlertContent>
//     </Alert>
//   );
// }

export default CreateForm;
