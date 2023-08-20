import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import 'shared/config/i18n/i18n';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

export function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('App', {}, [theme])}>
            {/* <BrowserRouter> */}
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
            {/* </BrowserRouter> */}
        </div>
    );
}
