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

type FormDataType = {
  name: string;
  description: string;
  category: string;
  keywords: string;
  limit: number | '';
  limitDisabled: boolean;
  thumbnail: File | null;
  member: string;
};

export default function TeamCreatePage() {
  return (
    <div className={styles.container}>
      <CreateMeetingPage />
    </div>
  );
}

function CreateMeetingPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    category: '',
    keywords: '',
    limit: 10,
    limitDisabled: false,
    thumbnail: null,
    member: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      limit: prev.limitDisabled ? 10 : Infinity,
    }));
  };

  const handleImageUpload = (file: File | null) => {
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

  return (
    <form className={formStyles.formStyle}>
      <div className={formStyles.body}>
        <CreatingStepProcess step={step} />
        <CreatingStepForm
          step={step}
          formData={formData}
          handleInputChange={handleInputChange}
          handleNumberChange={handleNumberChange}
          toggleLimitDisabled={toggleLimitDisabled}
          handleImageUpload={handleImageUpload}
        />
      </div>
      <CreatingStepNavigation step={step} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
    </form>
  );
}

function CreatingStepProcess({ step }: { step: number }) {
  return (
    <CreateStepList
      steps={[
        { key: '1', text: '모임이름 / 소개' },
        { key: '2', text: '카테고리 / 키워드' },
        { key: '3', text: '인원 제한' },
        { key: '4', text: '썸네일' },
      ]}
      currentStep={step.toString()}
    />
  );
}
// TODO: any 해결을 위해 타입 명시하기
// FIXME: input 창에서 x 버튼 클릭 시, 페이지 새로고침 되는 오류 수정

function CreatingStepForm({
  step,
  formData,
  handleInputChange,
  handleNumberChange,
  toggleLimitDisabled,
  handleImageUpload,
}: any) {
  return (
    <div className={formStyles.formWrapper}>
      {step === 1 && <MeetingInfoStep formData={formData} handleInputChange={handleInputChange} />}
      {step === 2 && <CategoryKeywordStep formData={formData} handleInputChange={handleInputChange} />}
      {step === 3 && (
        <MemberLimitStep
          formData={formData}
          handleNumberChange={handleNumberChange}
          toggleLimitDisabled={toggleLimitDisabled}
        />
      )}
      {step === 4 && <ThumbnailStep formData={formData} handleImageUpload={handleImageUpload} />}
    </div>
  );
}

function MeetingInfoStep({ formData, handleInputChange }: any) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>모임 이름</span>
        <Input
          name="name"
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
  );
}
// TODO: 카테고리 선택 창
// TODO: 키워드 입력하여 저장되는 기능
function CategoryKeywordStep({ formData, handleInputChange }: any) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>카테고리</span>
        <Input
          name="category"
          className={formStyles.input}
          placeholder="카테고리를 입력해주세요"
          value={formData.category}
          onChange={handleInputChange}
        />
      </label>
      <label className={formStyles.label}>
        <span>키워드</span>
        <Input
          name="keywords"
          className={formStyles.input}
          placeholder="키워드를 입력해주세요"
          value={formData.keywords}
          maxLength={10}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

function MemberLimitStep({ formData, handleInputChange, handleNumberChange, toggleLimitDisabled }: any) {
  return (
    <div className={formStyles.formGroup}>
      <label className={formStyles.label}>
        <span>몇 명까지 참여할 수 있나요?</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Input
            name="limit"
            className={formStyles.input}
            placeholder="모임 인원을 입력해주세요"
            value={formData.limit}
            onChange={handleNumberChange}
            disabled={formData.limitDisabled}
            style={{ flexGrow: 1, minWidth: '300px' }}
          />
          <Button
            type="button"
            variant={formData.limitDisabled ? 'primary' : 'secondary'}
            size="small"
            rounded="medium"
            onClick={toggleLimitDisabled}
          >
            제한 없음
          </Button>
        </div>
      </label>
      {/* TODO: 모임원 추가 모달 생성 */}
      <label className={formStyles.label}>
        <span>모임원 추가</span>
        <Input
          name="member"
          className={formStyles.input}
          placeholder="모임원을 선택해주세요"
          value={formData.member}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

function ThumbnailStep({ formData, handleImageUpload }: any) {
  return (
    <div className={formStyles.formGroup}>
      <ImageUpload selectedFile={formData.thumbnail} onImageUpload={handleImageUpload} />
      <div>
        <p>
          📌 <strong>1:1 비율 (500×500px) 권장</strong>
        </p>
        <p>1:1 비율이 아닌 이미지는 잘려 보일 수 있습니다.</p>
        <p>폭력적이거나 선정적인 이미지, 부적절한 단어 및 욕설이 들어간 이미지는 삭제될 수 있습니다.</p>
      </div>
    </div>
  );
}

function CreatingStepNavigation({ step, goToPrevStep, goToNextStep }: any) {
  return (
    <CreateButtonCommon
      prevText="이전"
      nextText={step === 4 ? '완료' : '다음'}
      onPrevStep={goToPrevStep}
      onNextStep={goToNextStep}
    />
  );
}
