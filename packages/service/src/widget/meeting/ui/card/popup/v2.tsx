import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

import { MeetingAuthority } from '@/entities';
import { escapePopup } from '@/widget/meeting/utils';

import { useOnEscape } from '@moeasy/storybook/hooks/use-on-escape';

import { MeetingPopupCard } from './meeting';
import { MemberCard } from './user';

type MeetingMemberCardState = {
  meetingId: string | null;
  memberId: string | null;
};

type PopupCardProps = MeetingMemberCardState & {
  /** 현재 창의 user의 authority가 아닌 사용자의 authority */
  authority?: MeetingAuthority;
};

const steps = createFunnelSteps<Partial<MeetingMemberCardState>>().extends('Meeting').extends('Member').build();

export function PopupCard({ meetingId, memberId, authority }: PopupCardProps) {
  const funnel = useFunnel({
    id: 'meeting-and-member',
    steps,
    initial: {
      step: meetingId ? 'Meeting' : 'Member',
      context: {
        meetingId,
        memberId,
      },
    },
  });

  useOnEscape(true, escapePopup);

  return (
    <funnel.Render
      Meeting={({ context, history }) => {
        if (!context.meetingId) return null;
        return (
          <MeetingPopupCard
            meetingId={context.meetingId}
            toMemberCard={(memberId) => {
              history.push('Member', { memberId });
            }}
          />
        );
      }}
      Member={({ context, history }) => {
        if (!context.memberId) return null;
        return (
          <MemberCard
            meetingId={context.meetingId ?? null}
            memberId={context.memberId}
            authority={authority}
            toMeeting={history.back}
          />
        );
      }}
    />
  );
}
