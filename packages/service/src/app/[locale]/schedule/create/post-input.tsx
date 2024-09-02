'use client';
import { useState } from 'react';

import { SearchButton } from '@moeasy/storybook/ui/button';

export default function PostInput() {
  const [address, setAddress] = useState('');
  return (
    <SearchButton
      style={{ width: '100%' }}
      onClick={() => {
        if (window.daum)
          new window.daum.Postcode({
            oncomplete: (data) => {
              setAddress(`${data.zonecode} ${data.address}`);
            },
          }).open();
      }}
    >
      {address}
    </SearchButton>
  );
}
