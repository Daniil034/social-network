import { ReactElement, ReactNode } from 'react';
import { withProviders } from 'shared/lib/providers/withProviders';
import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export function renderWithProviders(component: ReactNode, initialState?: DeepPartial<StateSchema>) {
    return render(withProviders(component, initialState) as ReactElement);
}
