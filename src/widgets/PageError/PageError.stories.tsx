import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
