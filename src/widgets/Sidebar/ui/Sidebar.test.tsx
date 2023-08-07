import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'shared/lib/tests/renderWithProviders';
import { waitFor } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('is rendered on the page', async () => {
        const { getByTestId } = renderWithProviders(<Sidebar />);
        await waitFor(() => {
            expect(getByTestId('sidebar-test')).toBeInTheDocument();
        });
    });

    test('toggling button collapses sidebar', async () => {
        const { findByTestId } = renderWithProviders(<Sidebar />);
        const button = await findByTestId('sidebar-test-toggle');
        const sidebar = await findByTestId('sidebar-test');
        await userEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
    });
});
