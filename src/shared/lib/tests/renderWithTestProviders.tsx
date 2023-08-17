import { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { withTestProviders } from 'shared/lib/providers/withTestProviders';

export function renderWithTestProviders(
    component: ReactNode,
    initialState?: DeepPartial<StateSchema>,
) {
    return render(withTestProviders(component, initialState) as ReactElement);
}
