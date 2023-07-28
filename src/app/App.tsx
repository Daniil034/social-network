import { BrowserRouter } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <BrowserRouter>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </BrowserRouter>
        </div>
    );
}
