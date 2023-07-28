import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

type Props = {
    className?: string
};

export function Navbar({ className }: Props) {
    const { t } = useTranslation('navbar');
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="/" theme="secondary">{t('main page link')}</AppLink>
                <AppLink to="/about" theme="secondary">{t('about page link')}</AppLink>
            </div>
        </div>
    );
}
