import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
    args: {
        to: '',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Link',
    },
};

export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'Link',
    },
};
