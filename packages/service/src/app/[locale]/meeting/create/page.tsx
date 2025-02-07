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
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    keywords: '',
    limit: 10,
    limitDisabled: false,
    thumbnail: null as File | null,
  });

  // TODO: e 등 매개변수에 타입 명시해서 any 오류 없애기
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value === '' ? 0 : Number(value),
    }));
  };

  const toggleLimitDisabled = () => {
    setFormData((prev) => ({
      ...prev,
      limitDisabled: !prev.limitDisabled,
      limit: prev.limitDisabled ? prev.limit : Infinity,
    }));
  };

  const handleImageUpload = (file) => {
    setFormData((prev) => ({
      ...prev,
      thumbnail: file,
    }));
  };

  const goToNextStep = () => {
    if (step < 4) setStep(step + 1);
  };
  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  // FIXME: input 창에서 x 버튼 클릭 시, 페이지 새로고침 되는 오류 수정
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
                    name="name"
                    type="text"
                    className={formStyles.input}
                    placeholder="모임 이름을 입력해주세요"
                    value={formData.name}
                    maxLength={30}
                    onChange={handleInputChange}
                  />
                </label>
                <label className={formStyles.label}>
                  <span>모임 소개</span>
                  <Textarea
                    name="description"
                    className={formStyles.input}
                    placeholder="모임 소개를 입력해주세요"
                    value={formData.description}
                    minLength={10}
                    maxLength={100}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className={formStyles.formWrapper}>
              <div className={formStyles.formGroup}>
                <label className={formStyles.label}>
                  <span>카테고리</span>
                  <Input
                    name="category"
                    type="text"
                    className={formStyles.input}
                    placeholder="모임의 성격을 가장 잘 나타내는 카테고리를 선택해주세요"
                    value={formData.category}
                    onChange={handleInputChange}
                  />
                </label>
                <label className={formStyles.label}>
                  <span>키워드</span>
                  <Input
                    name="keywords"
                    type="text"
                    className={formStyles.input}
                    placeholder="검색창에 키워드를 검색하면 나의 모임이 보여요"
                    value={formData.keywords}
                    maxLength={10}
                    onChange={handleInputChange}
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
                  {formData.limitDisabled ? (
                    <Input
                      className={formStyles.input}
                      disabled={formData.limitDisabled}
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
                      value={formData.limit}
                      onChange={handleNumberChange}
                    />
                  )}
                  <Button
                    type="button"
                    variant={formData.limitDisabled ? 'primary' : 'secondary'}
                    size="small"
                    rounded="medium"
                    onClick={toggleLimitDisabled}
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
                  selectedFile={formData.thumbnail}
                  onImageUpload={handleImageUpload}
                  initialPreview={formData.thumbnail ? URL.createObjectURL(formData.thumbnail) : undefined}
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
