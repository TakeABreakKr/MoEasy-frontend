import { Button } from '../button';

import { ListProps } from '.';

import { footer } from './list.css';

type ListFooterProps = Pick<ListProps, 'close' | 'selected'>;

export function ListFooter({ selected = [], close }: ListFooterProps) {
  return (
    <div className={footer}>
      <Button variant="primary" size="large" rounded="medium" onClick={() => close?.(selected)}>
        확인
      </Button>
    </div>
  );
}
