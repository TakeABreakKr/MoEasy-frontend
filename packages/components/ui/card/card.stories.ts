import type { Meta, StoryObj } from '@storybook/react';

import Card from './card';
import { CardMember } from './compound-card';

const exampleMembers = [
  { userRole: 'admin', name: '모임장' },
  { userRole: 'manager', name: '매니저' },
  { userRole: 'manager', name: '매니저' },
  { name: '모임원' },
  { name: '모임원' },
  { name: '모임원' },
  { name: '모임원' },
] satisfies CardMember[];

const meta = {
  title: 'Common/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    idx: 1,
    title: 'Team TAB',
    description: `사이드 프로젝트: 디스코드 봇 모이지(moeasy)를 완성시키는 것을 목표로 하는 모임입니다. 사이드 프로젝트: 디스코드 봇 모이지(moeasy)를 완성시키는 것을 목표로 하는 모..로 하는 모..로 하는 모...`,
    members: exampleMembers,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {},
};
