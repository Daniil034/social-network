import { classNames } from 'shared/lib/classNames/classNames';
import ThemeDarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '../lib/useTheme';

type Props = {
    className?: string
}

export function ThemeSwitcher(props: Props) {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            variant="clear"
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === 'dark' ? <LightThemeIcon /> : <ThemeDarkIcon />}
        </Button>
    );
}
