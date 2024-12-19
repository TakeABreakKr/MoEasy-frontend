import { useSearchParams } from 'next/navigation';

import { MeetingType } from '@/entities/meeting/api';
import { useQuery } from '@/shared/hooks/use-query';
import { sprinkles } from '@/shared/style/sprinkles/index.css';
import { alertCall } from '@/shared/utils/alert-call';
import { searchKeywordAction } from '@/widget/search/lib';

import { Button } from '@moeasy/storybook/ui/button';
import {
  CardDescription,
  CardHeader,
  CardTagsWrapper,
  CardThumbnail,
  CardTitle,
  CardWrapper,
} from '@moeasy/storybook/ui/card/compound-card';
import * as modalStyles from '@moeasy/storybook/ui/dialog/dialog.css';
import { XIcon } from '@moeasy/storybook/ui/icon';

import { MeetingJoinTextarea } from './textarea';

export function SearchMeetingPopupCard({ meetingId }: { meetingId: string }) {
  const searchParams = useSearchParams();
  const exitPopup = () => searchKeywordAction({ meetingId: null }, searchParams);
  const { data, loading, error, refetch } = useQuery<MeetingType>({ queryURL: `mock/meeting/${meetingId}` });

  const showTitle = loading ? '불러오는 중...' : error ? '이름을 불러올 수 없습니다.' : data?.name;
  const showExplanation = loading ? '불러오는 중...' : error ? '설명을 불러올 수 없습니다.' : data?.explanation;

  return (
    <div className={modalStyles.overlay}>
      <CardWrapper data-meeting-index={meetingId}>
        <CardThumbnail />
        <CardHeader>
          <Button variant="dark" size="icon" rounded="full" onClick={exitPopup}>
            <XIcon />
          </Button>
        </CardHeader>
        <div>
          <CardTitle>{showTitle}</CardTitle>
          <CardDescription>{showExplanation}</CardDescription>
          {error && (
            <CardTagsWrapper className={sprinkles({ justifyContent: 'flex-end' })}>
              <Button size="small" rounded="small" onClick={refetch}>
                재요청
              </Button>
            </CardTagsWrapper>
          )}
        </div>
        {data && (
          <form
            action={(formData) => {
              const { explanation } = Object.fromEntries(formData);
              console.log(explanation);
              alertCall({ title: '가입 신청 완료', message: '가입신청에 성공했습니다.', close: exitPopup });
            }}
          >
            <CardTagsWrapper>
              <MeetingJoinTextarea
                name="explanation"
                className={sprinkles({ width: '100%' })}
                maxLength={100}
                minHeight={20}
              />
            </CardTagsWrapper>
            <CardTagsWrapper className={sprinkles({ justifyContent: 'flex-end' })}>
              <Button size="small" rounded="small" variant="light" type="button" onClick={exitPopup}>
                취소
              </Button>
              <Button size="small" rounded="small">
                가입신청
              </Button>
            </CardTagsWrapper>
          </form>
        )}
      </CardWrapper>
    </div>
  );
}
