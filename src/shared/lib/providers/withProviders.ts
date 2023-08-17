import { ReactNode } from 'react';
import { reduceFunctions } from 'shared/lib/reduceFunctions/reduceFunctions';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { withTranslation } from './withTranslation/withTranslation';
import { withThemeProvider } from './withThemeProvider/withThemeProvider';
import { withRouter } from './withRouter/withRouter';
import { withStore } from './withStore/withStore';

export function withProviders(
    component: ReactNode,
    initialState?: DeepPartial<StateSchema>,
): ReactNode {
    return reduceFunctions(
        withStore(initialState),
        withThemeProvider,
        withRouter,
        withTranslation,
    )(component);
}
