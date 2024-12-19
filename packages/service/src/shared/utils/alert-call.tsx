import { overlay } from 'overlay-kit';

import { useOnEscape } from '@moeasy/storybook/hooks/use-on-escape';
import { AlertProps, SimpleAlert } from '@moeasy/storybook/ui/alert';

import { usePathnameChange } from '../hooks/use-pathname-change';

export const alertCall = ({ close, ...param }: AlertProps) =>
  overlay.open(({ unmount }) => {
    usePathnameChange(unmount);
    useOnEscape(true, unmount);
    const closeCallback = () => {
      close?.();
      unmount();
    };
    return <SimpleAlert open close={closeCallback} {...param} />;
  });
