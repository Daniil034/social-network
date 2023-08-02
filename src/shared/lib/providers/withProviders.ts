import { ReactNode } from 'react';
import { reduceFunctions } from 'shared/lib/reduceFunctions/reduceFunctions';
import { withTranslation } from 'shared/lib/providers/withTranslation/withTranslation';
import { withThemeProvider } from 'shared/lib/providers/withThemeProvider/withThemeProvider';

export function withProviders(component: ReactNode) {
    return reduceFunctions(
        withTranslation,
        withThemeProvider,
    )(component);
}
