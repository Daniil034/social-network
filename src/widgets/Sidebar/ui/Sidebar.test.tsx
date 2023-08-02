import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'shared/lib/tests/renderWithProviders';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('is rendered on the page', () => {
        const { getByTestId } = renderWithProviders(<Sidebar />);
        expect(getByTestId('sidebar-test')).toBeInTheDocument();
    });

    test('toggling button collapses sidebar', async () => {
        const { getByTestId } = renderWithProviders(<Sidebar />);
        const button = getByTestId('sidebar-test-toggle');
        const sidebar = getByTestId('sidebar-test');
        await userEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
    });
});
