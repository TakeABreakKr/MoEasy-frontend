import { sprinkles } from '@/shared/style/sprinkles/index.css';

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
import { Textarea } from '@moeasy/storybook/ui/textarea';

export function SearchMeetingPopupCard({ meetingId }: { meetingId: string }) {
  return (
    <div className={modalStyles.overlay}>
      <CardWrapper data-meeting-index={meetingId} hoverEffect>
        <CardThumbnail />
        <CardHeader>
          <Button variant="dark" size="icon" rounded="full">
            <XIcon />
          </Button>
        </CardHeader>
        <div>
          <CardTitle>Popup for {meetingId} be Will mount</CardTitle>
          <CardDescription>Popup for {meetingId} be Will mount</CardDescription>
        </div>
        <CardTagsWrapper>
          <Textarea className={sprinkles({ width: '100%' })} onValueChange={console.log} />
        </CardTagsWrapper>
      </CardWrapper>
    </div>
  );
}
