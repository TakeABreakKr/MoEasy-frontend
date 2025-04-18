'use client';

import { useState } from 'react';
import { CreatingStepProcess } from './creating-step-process';
import { CreatingStepNavigation } from './creating-step-navigation';
import { MeetingInfoStep } from './step/meeting-info-step';
import { CategoryKeywordStep } from './step/category-keyword-step';
import { MemberInfoStep } from './step/member-info-step';
import { ThumbnailStep } from './step/thumbnail-step';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';

type FormDataType = {
  name: string;
  description: string;
  category: string;
  keywords: string[];
  limit: number | '';
  limitDisabled: boolean;
  thumbnail: File | null;
  member: string[];
  publicYn: boolean;
};

export type StepProps = {
  formData: FormDataType;
  dispatch: (payload: Partial<FormDataType>) => void;
};

export function CreatingStepForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    category: '',
    keywords: [],
    limit: 10,
    limitDisabled: false,
    thumbnail: null,
    member: [],
    publicYn: false,
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

  const goToNextStep = () => {
    if (step === 4) {
      console.log('최종 formData:', formData); // 테스트용) formData 출력
    } else if (step < 4) {
      setStep(step + 1);
    }
  };

  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <form className={formStyles.formStyle}>
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
