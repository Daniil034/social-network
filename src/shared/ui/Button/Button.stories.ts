import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: { control: 'color' },
        className: { control: 'text' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
    args: {
        variant: 'clear',
        children: 'Clear button',
    },
};

export const ClearInverted: Story = {
    args: {
        variant: 'clearInverted',
        children: 'Clear inverted button',
    },
};

export const Normal: Story = {
    args: {
        children: 'Normal button',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'Outlined button',
    },
};
