'use client';

import { useState } from 'react';
import CreatingStepProcess from './CreatingStepProcess';
import CreatingStepNavigation from './CreatingStepNavigation';
import MeetingInfoStep from './step/MeetingInfoStep';
import CategoryKeywordStep from './step/CategoryKeywordStep';
import MemberInfoStep from './step/MemberInfoStep';
import ThumbnailStep from './step/ThumbnailStep';

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

export type StepProps = {
  formData: FormDataType;
  dispatch: (payload: Partial<FormDataType>) => void;
};

export default function CreatingStepForm() {
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
    if (step < 4) setStep(step + 1);
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
