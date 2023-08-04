import { ReactNode } from 'react';
import { reduceFunctions } from 'shared/lib/reduceFunctions/reduceFunctions';
import { withTranslation } from 'shared/lib/providers/withTranslation/withTranslation';
import { withThemeProvider } from 'shared/lib/providers/withThemeProvider/withThemeProvider';
import { withRouter } from 'shared/lib/providers/withRouter/withRouter';

export function withProviders(component: ReactNode) {
    return reduceFunctions(
        withThemeProvider,
        withRouter,
        withTranslation,
    )(component);
}
