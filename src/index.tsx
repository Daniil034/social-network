import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'shared/ui/ErrorBoundary/ErrorBoundary';
import { PageError } from 'widgets/PageError/PageError';

const root = createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </ErrorBoundary>,
);
