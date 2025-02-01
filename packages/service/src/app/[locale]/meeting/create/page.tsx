'use client';

import { useState } from 'react';

import { Input } from '@moeasy/storybook/ui/input';
import { Textarea } from '@moeasy/storybook/ui/textarea';
import { Button } from '@moeasy/storybook/ui/button';
import { CreateStepList } from '@moeasy/storybook/ui/create/step-list';
import { CreateButtonCommon } from '@moeasy/storybook/ui/create/step-button';
import { ImageUpload } from '@moeasy/storybook/ui/file-upload';

import * as styles from '@/shared/style/create-form/index.css';
import * as formStyles from '@moeasy/storybook/ui/create/style.css';

export default function TeamCreatePage() {
  const [step, setStep] = useState(1);
  // TODO: useState 대신 useReducer를 사용하면 useState의 개수를 줄일 수 있음?!!...
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [keywords, setKeywords] = useState('');
  //  TODO: 키워드는 여러 개 받을 수 있으니 배열 형태로, 카테고리는 카테고리 리스트가 보여질 수 있게끔
  const [limit, setLimit] = useState(10);
  const [limitDisabled, setLimitDisabled] = useState(false);

  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const goToNextStep = () => {
    if (step < 4) setStep(step + 1);
  };
  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className={styles.container}>
      <form className={formStyles.formStyle}>
        <div className={formStyles.body}>
          <CreateStepList
            steps={[
              { key: '1', text: '모임이름 / 소개' },
              { key: '2', text: '카테고리 / 키워드' },
              { key: '3', text: '인원 제한' },
              { key: '4', text: '썸네일' },
            ]}
            currentStep={step.toString()}
          />
          {step === 1 && (
            <div className={formStyles.formWrapper}>
              <div className={formStyles.formGroup}>
                <label className={formStyles.label}>
                  <span>모임 이름</span>
                  <Input
                    type="text"
                    className={formStyles.input}
                    placeholder="모임 이름을 입력해주세요"
                    value={name}
                    maxLength={30}
                    onValueChange={(name) => setName(name)}
                  />
                </label>
                <label className={formStyles.label}>
                  <span>모임 소개</span>
                  <Textarea
                    className={formStyles.input}
                    placeholder="모임 소개를 입력해주세요"
                    value={description}
                    minLength={10}
                    maxLength={100}
                    onValueChange={(description) => setDescription(description)}
                  />
                </label>
              </div>
            </div>
          )}
          {/* FIXME: 카테고리 리스트랑 키워드 처리를 위한 로직으로 바꿔야 함 */}
          {step === 2 && (
            <div className={formStyles.formWrapper}>
              <div className={formStyles.formGroup}>
                <label className={formStyles.label}>
                  <span>카테고리</span>
                  <Input
                    type="text"
                    className={formStyles.input}
                    placeholder="모임의 성격을 가장 잘 나타내는 카테고리를 선택해주세요"
                    value={category}
                    onValueChange={(category) => setCategory(category)}
                  />
                </label>
                <label className={formStyles.label}>
                  <span>키워드</span>
                  <Input
                    type="text"
                    className={formStyles.input}
                    placeholder="검색창에 키워드를 검색하면 나의 모임이 보여요"
                    value={keywords}
                    maxLength={10}
                    onValueChange={(keywords) => setKeywords(keywords)}
                  />
                </label>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className={formStyles.formWrapper}>
              <div className={formStyles.formGroup}>
                <label className={formStyles.label}>
                  <span>몇 명까지 참여할 수 있나요?</span>
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
                </label>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className={formStyles.formWrapper}>
              <div className={formStyles.formGroup}>
                <label className={formStyles.label}>
                  <span>썸네일 설정</span>
                </label>
                <ImageUpload
                  selectedFile={thumbnail}
                  onImageUpload={setThumbnail}
                  initialPreview={thumbnail ? URL.createObjectURL(thumbnail) : undefined}
                />
                <div>
                  <p>
                    📌 <strong>1:1 비율 (500×500px) 권장</strong>
                  </p>
                  <p>1:1 비율이 아닌 이미지는 잘려 보일 수 있습니다.</p>
                  <p>폭력적이거나 선정적인 이미지, 부적절한 단어 및 욕설이 들어간 이미지는 삭제될 수 있습니다.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
      <CreateButtonCommon
        prevText="이전"
        nextText={step === 4 ? '완료' : '다음'}
        onPrevStep={step > 1 ? goToPrevStep : () => {}}
        onNextStep={step < 4 ? goToNextStep : () => alert('모임 생성 완료!')}
      />
    </div>
  );
  // TODO: 컴포넌트 나누기
}
