import { suite } from '@moeasy/storybook/font';
import { MainFooter } from '@moeasy/storybook/ui/footer';
import { Separator } from '@moeasy/storybook/ui/separator';

import { MainBody } from './body';

export async function MainPage() {
  return (
    <>
      <MainBody />
      <Separator direction="horizontal" />
      <MainFooter className={suite.className} />
    </>
  );
}
