import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/authByUsername';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks';
import { selectUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

type Props = {
    className?: string
};

export function Navbar({ className }: Props) {
    const { t } = useTranslation('navbar');
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
    const authData = useAppSelector(selectUserAuthData);
    const dispatch = useAppDispatch();

    const handleOpenModal = useCallback(() => {
        setIsAuthModalVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModalVisible(false);
    }, []);

    const handleLogout = () => {
        dispatch(userActions.logout());
    };

    if (authData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <div className={styles.links}>
                    <AppLink to="/" theme="secondary">{t('main page link')}</AppLink>
                    <AppLink to="/about" theme="secondary">{t('about page link')}</AppLink>
                    {/* <ErrorButton /> */}
                    <Button
                        variant="clearInverted"
                        onClick={handleLogout}
                    >
                        {t('Logout')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" theme="secondary">{t('main page link')}</AppLink>
                <AppLink to="/about" theme="secondary">{t('about page link')}</AppLink>
                {/* <ErrorButton /> */}
                <Button
                    variant="clearInverted"
                    onClick={handleOpenModal}
                >
                    {t('Login')}
                </Button>
            </div>
            <LoginModal isOpen={isAuthModalVisible} onClose={handleCloseModal} />
        </div>
    );
}
