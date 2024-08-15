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
        style={{ width: '100%' }}
        value={keyword}
        onValueChange={setKeyword}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            dispatchKeyword?.(keyword);
          }
        }}
      />
      <Button
        variant="primary"
        size="medium"
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
