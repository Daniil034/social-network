import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import { renderWithTestProviders } from 'shared/lib/tests/renderWithTestProviders';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('is rendered on the page', async () => {
        const { getByTestId } = renderWithTestProviders(<Sidebar />);
        await waitFor(() => {
            expect(getByTestId('sidebar-test')).toBeInTheDocument();
        });
    });

    test('toggling button collapses sidebar', async () => {
        const { findByTestId } = renderWithTestProviders(<Sidebar />);
        const button = await findByTestId('sidebar-test-toggle');
        const sidebar = await findByTestId('sidebar-test');
        await userEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
    });
});
