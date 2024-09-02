import { horizontalScrollHandler } from '../../utils/lib/mouseScroll';
import useMouseSnapSlide from '../../utils/lib/useMouseSnapSlide';
import { Tag } from '../tag';

import { ListProps, SelectedListDispatch } from '.';

import * as styles from './list.css';

type ListDeleteControlProps = Pick<ListProps, 'selected'> & {
  dispatch: SelectedListDispatch;
};

export function ListDeleteControl({ selected = [], dispatch }: ListDeleteControlProps) {
  const { callbacks } = useMouseSnapSlide();
  return (
    <div className={styles.delBtnWrapper} {...callbacks} onWheel={horizontalScrollHandler}>
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
