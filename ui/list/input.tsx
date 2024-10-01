import { useState } from 'react';

import { Button } from '../button';
import { Input } from '../input';

import * as styles from './list.css';

export function ListKeywordInput({ dispatchKeyword }: { dispatchKeyword?: (keyword: string) => void }) {
  const [keyword, setKeyword] = useState('');
  return (
    <div className={styles.inputWrapper}>
      <Input
        type="text"
        placeholder="닉네임, 유저코드 검색"
        className={styles.searchInput}
        value={keyword}
        onValueChange={setKeyword}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            dispatchKeyword?.(keyword);
          }
        }}
      />
      <Button
        data-testid="dispatch-keyword"
        variant="secondary"
        size="small"
        rounded="medium"
        onClick={() => {
          dispatchKeyword?.(keyword);
        }}
      >
        검색
      </Button>
    </div>
  );
}
