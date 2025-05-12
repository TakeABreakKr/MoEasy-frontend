'use client';

import { Address } from '@/shared/type/daum-post';

import { SearchButton } from '@moeasy/storybook/ui/button';

import { sprinkles } from '../style/sprinkles/index.css';

export default function PostInput({
  address,
  setAddress,
  placeholder,
}: {
  address?: Address;
  setAddress?: (address: Address) => void;
  placeholder?: string;
}) {
  return (
    <SearchButton
      className={sprinkles({ width: '100%' })}
      placeholder={placeholder}
      onClick={() => {
        if (window.daum)
          new window.daum.Postcode({
            oncomplete: setAddress,
          }).open({
            q: address?.query,
          });
      }}
    >
      {address?.address}
    </SearchButton>
  );
}
