import { renderWithProviders } from 'shared/lib/tests/renderWithProviders';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter component', () => {
    test('renders on the page', () => {
        const { getByTestId } = renderWithProviders(<Counter />);
        expect(getByTestId('counter-value-test')).toBeInTheDocument();
    });

    test('renders with default state', () => {
        const { getByTestId } = renderWithProviders(<Counter />);
        expect(getByTestId('counter-value-test')).toHaveTextContent('0');
    });

    test('renders with a passed default state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        const { getByTestId } = renderWithProviders(<Counter />, state);
        expect(getByTestId('counter-value-test')).toHaveTextContent('10');
    });

    test('clicking an increment button increments a value by one', async () => {
        const { getByTestId } = renderWithProviders(<Counter />);
        await userEvent.click(getByTestId('counter-increment-test'));
        expect(getByTestId('counter-value-test')).toHaveTextContent('1');
    });

    test('clicking a decrement button decrement a value by one', async () => {
        const { getByTestId } = renderWithProviders(<Counter />);
        await userEvent.click(getByTestId('counter-decrement-test'));
        expect(getByTestId('counter-value-test')).toHaveTextContent('-1');
    });
});
