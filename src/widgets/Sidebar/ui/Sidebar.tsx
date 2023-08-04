import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

type Props = {
    className?: string,
};

export function Sidebar(props: Props) {
    const { className } = props;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const { t } = useTranslation('sidebar');

    const handleCollapseSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(styles.Sidebar, { [styles.collapsed]: isCollapsed }, [className])}
            data-testid="sidebar-test"
        >
            <Button>TEST</Button>
            <button
                data-testid="sidebar-test-toggle"
                type="button"
                onClick={handleCollapseSidebar}
            >
                {t('toggle sidebar button')}
            </button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
}
