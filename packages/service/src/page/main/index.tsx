import { MainBody } from '@/widget/main/body';

import { MainFooter } from '@moeasy/storybook/ui/footer';
import { Separator } from '@moeasy/storybook/ui/separator';

export async function MainPage() {
  return (
    <>
      <MainBody />
      <Separator direction="horizontal" />
      <MainFooter />
    </>
  );
}
