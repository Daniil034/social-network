import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
