import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { sidebarItemsList } from 'widgets/Sidebar/model/items';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

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
            <div className={styles.links}>
                {sidebarItemsList.map((sidebarItem) => (
                    <SidebarItem
                        key={sidebarItem.path}
                        item={sidebarItem}
                        collapsed={isCollapsed}
                    />
                ))}
            </div>
            <Button
                data-testid="sidebar-test-toggle"
                onClick={handleCollapseSidebar}
                className={styles.collapseBtn}
                variant="clearInverted"
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={classNames(styles.switchers)}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
}
