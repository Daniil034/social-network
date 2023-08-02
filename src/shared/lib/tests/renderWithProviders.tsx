import { ReactElement, ReactNode } from 'react';
import { withProviders } from 'shared/lib/providers/withProviders';
import { render } from '@testing-library/react';

export function renderWithProviders(component: ReactNode) {
    return render(withProviders(component) as ReactElement);
}
