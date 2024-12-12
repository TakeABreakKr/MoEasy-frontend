import { horizontalScrollHandler } from '../../utils/lib/mouseScroll';
import useMouseSnapSlide from '../../utils/lib/useMouseSnapSlide';
import { Label } from '../label/label';
import { NameTag, Tag } from '../tag';

import { ListProps, SelectedListDispatch } from '.';

import { tagVariant } from '../tag/tag.css';
import * as styles from './list.css';

type ListDeleteControlProps = Pick<ListProps, 'selected' | 'limit'> & {
  dispatch: SelectedListDispatch;
  commentDisabled?: React.ReactNode;
};

export function ListDeleteControl({ selected = [], limit, dispatch }: ListDeleteControlProps) {
  const { callbacks } = useMouseSnapSlide();
  return (
    <div className={styles.delBtnWrapper} {...callbacks} onWheel={horizontalScrollHandler}>
      <NameTag userRole="limit">
        {selected.length}
        {typeof limit === 'number' ? `/${limit} 명` : `명`}
      </NameTag>
      {selected.length === limit && (
        <Label variant="error" className={tagVariant({ variant: 'error' })}>
          제한 인원 수를 초과하여 선택할 수 없습니다
        </Label>
      )}
      {selected.map((item) => (
        <Tag
          key={item.id}
          isDelete
          onClick={() => dispatch({ type: 'REMOVE', payload: item, predicate: ({ id }) => item.id === id })}
        >
          {item.name}
        </Tag>
      ))}
    </div>
  );
}
