import clsx from 'clsx';

import { CheckBoxActionType } from '../checkbox/reducer';

import { ListItem } from './item';
import { ListItemType, ListProps } from '.';

import { scrollStyle } from '../scroll/scroll.css';
import { itemList } from './list.css';

type ListContentProps = Pick<ListProps, 'list' | 'selected'> & {
  dispatch: React.Dispatch<CheckBoxActionType<ListItemType>>;
};

export function ListContent({ list = [], selected = [], dispatch }: ListContentProps) {
  return (
    <div className={clsx(itemList, scrollStyle)} data-testid="list-content">
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          checked={selected.findIndex((_item) => _item.id == item.id) !== -1}
          toggleItemSelection={() => dispatch({ type: 'ADD', payload: item, predicate: ({ id }) => item.id === id })}
        />
      ))}
    </div>
  );
}
