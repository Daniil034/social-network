import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { reduceFunctions } from 'shared/lib/reduceFunctions/reduceFunctions';
import { withTranslationForTests } from 'shared/lib/providers/withTranslation/withTranslationForTests';
import { withRouter } from 'shared/lib/providers/withRouter/withRouter';
import { withStore } from 'shared/lib/providers/withStore/withStore';
import { withThemeProvider } from 'shared/lib/providers/withThemeProvider/withThemeProvider';

export function withTestProviders(
    component: ReactNode,
    initialState?: DeepPartial<StateSchema>,
): ReactNode {
    return reduceFunctions(
        withTranslationForTests,
        withRouter,
        withStore(initialState),
        withThemeProvider,
    )(component);
}
