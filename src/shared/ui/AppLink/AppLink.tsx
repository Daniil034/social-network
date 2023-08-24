import { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

type Props = {
    className?: string,
    theme?: AppLinkTheme,
    children: ReactNode
} & ComponentProps<typeof Link>;

export function AppLink(props: Props) {
    const {
        className,
        theme = 'primary',
        to,
        children,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
}
