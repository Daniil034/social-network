import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/items';
import styles from './SidebarItem.module.scss';

type Props = {
    item: SidebarItemType,
    collapsed: boolean,
};

export function SidebarItem(props: Props) {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            to={item.path}
            theme="secondary"
            className={classNames(styles.item, { [styles.collapsed]: collapsed })}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
}
