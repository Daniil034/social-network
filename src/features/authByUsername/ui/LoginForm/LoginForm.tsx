import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

type Props = {
    className?: string;
};

export function LoginForm(props: Props) {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                placeholder={t('Type your username')}
                type="text"
                className={styles.input}
                autoFocus
            />
            <Input
                placeholder={t('Type your password')}
                type="text"
                className={styles.input}
            />
            <Button className={styles.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
}
