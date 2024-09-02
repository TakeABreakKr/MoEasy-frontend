import Link from 'next/link';
import Script from 'next/script';

import PostInput from './post-input';

export default async function ScheduleCreatePage() {
  return (
    <main>
      Hello, ScheduleCreate Page!
      <Link href="/schedule">일정 리스트로 돌아가기</Link>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      />
      <section>
        <PostInput />
      </section>
    </main>
  );
}
