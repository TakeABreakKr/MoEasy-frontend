'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';

import { dropdownMenuContent } from '../dropdown-menu/dropdown-menu.css';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={clsx(dropdownMenuContent, className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
);

const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger };
