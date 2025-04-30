'use client';

import { useState } from 'react';
import { CreatingStepProcess } from './creating-step-process';
import { CreatingStepNavigation } from './creating-step-navigation';
import { MeetingInfoStep } from './step/meeting-info-step';
import { CategoryKeywordStep } from './step/category-keyword-step';
import { MemberInfoStep } from './step/member-info-step';
import { ThumbnailStep } from './step/thumbnail-step';
import { useCreateMeetingMutation } from '@/entities/meeting/api/browser';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';

export type CategoryType =
  | '반려동물'
  | '식물/자연'
  | '봉사활동'
  | '환경'
  | '게임/오락'
  | '운동/스포츠'
  | '아웃도어/여행'
  | '건강'
  | '자동차/오토바이'
  | '스포츠 관람'
  | '사교/친목'
  | '음식/음료'
  | '술'
  | '연애/이성관계'
  | '가족/육아'
  | '심리/상담'
  | '독서/인문학'
  | '공예/만들기'
  | '악기/음악'
  | '인테리어/가구'
  | '미용'
  | '문화/공연/축제'
  | '댄스/무용'
  | '사진/영상'
  | '요리'
  | '재테크'
  | '자기계발/공부'
  | '커리어/직장'
  | '외국/언어'
  | '창업/사업';

export type FormDataType = {
  name: string;
  explanation: string;
  category: CategoryType | '';
  keywords: string[];
  limit: number | '';
  limitDisabled: boolean;
  thumbnail: File | null;
  members: string[];
  publicYn: boolean;
  canJoin?: boolean;
};

export type StepProps = {
  formData: FormDataType;
  dispatch: (payload: Partial<FormDataType>) => void;
};

export function CreatingStepForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    explanation: '',
    category: '',
    keywords: [],
    limit: 10,
    limitDisabled: false,
    thumbnail: null,
    members: [],
    publicYn: false,
    canJoin: true,
  });

  const dispatch = (payload: Partial<FormDataType>) => {
    setFormData((prev) => ({
      ...prev,
      ...payload,
    }));
  };

  const toggleLimitDisabled = () => {
    dispatch({
      limitDisabled: !formData.limitDisabled,
      limit: formData.limitDisabled ? 10 : Infinity,
    });
  };

  const createMeetingMutation = useCreateMeetingMutation();

  const goToNextStep = () => {
    if (step === 4) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    createMeetingMutation.mutate(formData, {
      onSuccess: () => {
        alert('모임이 성공적으로 생성되었습니다!'); // 우선은 모달 대신 alert로 대체
      },
      onError: (error) => {
        console.error('모임 생성 실패:', error);
        alert('모임 생성 중 오류가 발생했습니다.');
      },
    });
  };

  return (
    <form className={formStyles.formStyle} onSubmit={(e) => e.preventDefault()}>
      <div className={formStyles.body}>
        <CreatingStepProcess step={step} />
        <div className={formStyles.formWrapper}>
          {step === 1 && <MeetingInfoStep formData={formData} dispatch={dispatch} />}
          {step === 2 && <CategoryKeywordStep formData={formData} dispatch={dispatch} />}
          {step === 3 && (
            <MemberInfoStep formData={formData} dispatch={dispatch} toggleLimitDisabled={toggleLimitDisabled} />
          )}
          {step === 4 && <ThumbnailStep formData={formData} dispatch={dispatch} />}
        </div>
        <CreatingStepNavigation step={step} goToPrevStep={goToPrevStep} goToNextStep={goToNextStep} />
      </div>
    </form>
  );
}
