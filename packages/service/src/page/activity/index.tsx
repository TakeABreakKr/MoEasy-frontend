import Script from 'next/script';

import * as styles from '@/shared/style/create-form/index.css';

import { CreatingActivityStepForm } from './form';

export default function ActivityCreatePage({ meetingId }: { meetingId: string }) {
  return (
    <div className={styles.container}>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      />
      <CreatingActivityStepForm meetingId={meetingId} />
    </div>
  );
}
