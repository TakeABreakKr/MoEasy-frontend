// DropdownMenu.tsx
import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';

import {
  dropdownMenuContent,
  dropdownMenuItem,
  dropdownMenuLabel,
  dropdownMenuSeparator,
  dropdownMenuShortcut,
} from './dropdown-menu.css';

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return <DropdownMenuPrimitive.SubContent className={clsx(dropdownMenuContent, className)} {...props} />;
}
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

function DropdownMenuContent({
  className,
  sideOffset = 4,
  isPortal = true,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content> & { isPortal?: boolean }) {
  if (isPortal)
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={sideOffset}
          className={clsx(dropdownMenuContent, className)}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    );
  return (
    <DropdownMenuPrimitive.Content
      sideOffset={sideOffset}
      className={clsx(dropdownMenuContent, className)}
      {...props}
    />
  );
}
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

function DropdownMenuItem({
  className,
  inset,
  notice,
  align = 'left',
  padding,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & RecipeVariants<typeof dropdownMenuItem>) {
  return (
    <DropdownMenuPrimitive.Item
      className={clsx(dropdownMenuItem({ inset, notice, align, padding }), className)}
      {...props}
    />
  );
}
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }) {
  return <DropdownMenuPrimitive.Label className={clsx(dropdownMenuLabel, className)} {...props} />;
}
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return <DropdownMenuPrimitive.Separator className={clsx(dropdownMenuSeparator, className)} {...props} />;
}
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={dropdownMenuShortcut} {...props} />;
}
DropdownMenuShortcut.displayName = DropdownMenuPrimitive.Separator.displayName;

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
};
