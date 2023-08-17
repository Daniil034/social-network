import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
