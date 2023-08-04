import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
    title: 'widget/Navbar',
    component: Navbar,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
