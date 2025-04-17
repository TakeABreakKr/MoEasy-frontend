'use client';

import { Address } from '@/shared/type/daum-post';

import { SearchButton } from '@moeasy/storybook/ui/button';

export default function PostInput({
  address,
  setAddress,
}: {
  address?: Address;
  setAddress?: (address: Address) => void;
}) {
  return (
    <SearchButton
      style={{ width: '100%' }}
      onClick={() => {
        if (window.daum)
          new window.daum.Postcode({
            oncomplete: (data) => setAddress?.(data),
          }).open();
      }}
    >
      {address?.sigungu}
    </SearchButton>
  );
}
