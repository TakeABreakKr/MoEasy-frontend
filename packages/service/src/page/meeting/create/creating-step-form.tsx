'use client';

import { useState } from 'react';

import { useCreateMeetingMutation } from '@/entities/meeting/api/browser';
import { FormDataType } from '@/entities/meeting/api/type';
import { alertCall } from '@/shared/utils/alert-call';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';

import { CategoryKeywordStep } from './step/category-keyword-step';
import { MeetingInfoStep } from './step/meeting-info-step';
import { MemberInfoStep } from './step/member-info-step';
import { ThumbnailStep } from './step/thumbnail-step';
import { CreatingStepNavigation } from './creating-step-navigation';
import { CreatingStepProcess } from './creating-step-process';

export type StepProps = {
  formData: FormDataType;
  dispatch: (payload: Partial<FormDataType>) => void;
};

export function CreatingStepForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    explanation: '',
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
    createMeetingMutation.mutate(formData as Required<FormDataType>, {
      onSuccess: () => {
        alertCall({ message: '모임이 성공적으로 생성되었습니다!' }); // 우선은 모달 대신 alert로 대체
      },
      onError: (error) => {
        console.error('모임 생성 실패:', error);
        alertCall({ message: '모임 생성 중 오류가 발생했습니다.' });
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
