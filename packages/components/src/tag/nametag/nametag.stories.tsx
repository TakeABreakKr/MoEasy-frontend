import type { Meta, StoryObj } from '@storybook/react';

import { NameTag } from './nametag';

const SampleBadge = ({
  thumbnail = 'https://via.placeholder.com/30',
  userRole,
  text = '매니저',
}: {
  thumbnail?: string;
  userRole?: 'admin' | 'manager' | 'limit';
  text?: string;
}) => {
  return (
    <NameTag userRole={userRole} src={thumbnail}>
      {text}
    </NameTag>
  );
};

const meta = {
  title: 'Common/Tag/NameTag',
  component: SampleBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userRole: {
      options: ['admin', 'manager', 'limit'],
      control: 'select',
    },
  },
  args: {
    thumbnail: 'https://via.placeholder.com/30',
    userRole: 'admin',
    text: '매니저',
  },
} satisfies Meta<typeof SampleBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
