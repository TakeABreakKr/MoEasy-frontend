'use client';

import { useReducer } from 'react';

import * as formStyles from '@moeasy/storybook/ui/create/style.css';

import { ActivityAnnouncementStep } from './step/announcement';
import { ActivityTimeStep } from './step/date';
import { ActivityMethodStep } from './step/method';
import { ActivityNameStep } from './step/name';
import { ActivityParticipantStep } from './step/participants';
import { ActivityReminderStep } from './step/reminder';
import { ActivityStepProcess } from './process';
import { activityStepEnum, activityStepInitializer, activityStepReducer } from './reducer';

export function CreatingActivityStepForm({ meetingId }: { meetingId: string }) {
  const [state, dispatch] = useReducer(activityStepReducer, meetingId, activityStepInitializer);
  const stepIndex = activityStepEnum.indexOf(state.step) + 1;

  return (
    <form className={formStyles.formStyle}>
      <div className={formStyles.body}>
        <ActivityStepProcess step={stepIndex} />
        <div className={formStyles.formWrapper}>
          {state.step === 'name' && (
            <ActivityNameStep
              step={stepIndex}
              name={state.data.name}
              onNextStep={({ name }) => dispatch({ type: 'name', payload: name })}
            />
          )}
          {state.step === 'date' && (
            <ActivityTimeStep
              step={stepIndex}
              startDate={state.data.startDate}
              endDate={state.data.endDate}
              onPrevStep={() => dispatch({ type: 'step-back' })}
              onNextStep={(payload) => dispatch({ type: 'date', payload })}
            />
          )}
          {state.step === 'method' && (
            <ActivityMethodStep
              step={stepIndex}
              address={state.data.address}
              onlineYn={state.data.onlineYn}
              detailAddress={state.data.detailAddress}
              onPrevStep={() => dispatch({ type: 'step-back' })}
              onNextStep={(payload) => dispatch({ type: 'method', payload })}
            />
          )}
          {state.step === 'reminder' && (
            <ActivityReminderStep
              step={stepIndex}
              reminder={state.data.reminder}
              onPrevStep={() => dispatch({ type: 'step-back' })}
              onNextStep={(payload) => dispatch({ type: 'reminder', payload: payload.reminder })}
            />
          )}
          {state.step === 'announcement' && (
            <ActivityAnnouncementStep
              step={stepIndex}
              announcement={state.data.announcement}
              onPrevStep={() => dispatch({ type: 'step-back' })}
              onNextStep={(payload) => dispatch({ type: 'announcement', payload: payload.announcement })}
            />
          )}
          {state.step === 'participants' && (
            <ActivityParticipantStep
              step={stepIndex}
              payload={state.data}
              onPrevStep={() => dispatch({ type: 'step-back' })}
            />
          )}
        </div>
      </div>
    </form>
  );
}
