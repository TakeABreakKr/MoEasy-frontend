import Script from 'next/script';

export default async function ScheduleCreatePage() {
  return (
    <main>
      <Script
        strategy="beforeInteractive"
        type="text/javascript"
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      />
      <section>
        {/** TODO */}
        {/* <ScheduleCreateForm /> */}
        {/* <PostInput /> */}
      </section>
    </main>
  );
}
