import { overlay } from 'overlay-kit';

import { useOnEscape } from '@moeasy/storybook/hooks/use-on-escape';
import { AlertProps, SimpleAlert } from '@moeasy/storybook/ui/alert';

import { usePathnameChange } from '../hooks/use-pathname-change';

export const alertCall = (param: AlertProps) =>
  overlay.open(({ unmount }) => {
    usePathnameChange(unmount);
    useOnEscape(true, unmount);
    return <SimpleAlert open close={unmount} {...param} />;
  });
