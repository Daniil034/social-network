import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary/ErrorBoundary';
import { PageError } from 'widgets/PageError/PageError';
import 'app/styles/index.scss';
import { withProviders } from 'shared/lib/providers/withProviders';

const root = createRoot(document.getElementById('root')!);
root.render(
    <ErrorBoundary fallback={<PageError />}>
        {withProviders(<App />)}
    </ErrorBoundary>,
);
