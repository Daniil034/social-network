import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nForTests';

export function withTranslationForTests(children: ReactNode) {
    return (
        <Suspense fallback="Wait pls...">
            <I18nextProvider i18n={i18n}>
                {children}
            </I18nextProvider>
        </Suspense>
    );
}
