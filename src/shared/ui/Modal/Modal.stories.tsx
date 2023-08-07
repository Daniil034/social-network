import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        children: 'Modal text',
        isOpen: true,
    },
};
