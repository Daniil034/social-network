import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks';
import React, { useCallback, useReducer } from 'react';
import { loginByUsername } from 'features/authByUsername/model/services/loginByUsername';
import { Text } from 'shared/ui/Text/Text';
import { selectUserAuthData } from 'entities/User';
import styles from './LoginForm.module.scss';
import { selectLoginState } from '../../model/selectors/selectLoginState';

type Props = {
    className?: string;
    onLoginSucces?: Function
};

type FormSchema = {
    username: string,
    password: string,
}

export function LoginForm(props: Props) {
    const { className, onLoginSucces } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const { isLoading, error } = useAppSelector(selectLoginState);
    const authData = useAppSelector(selectUserAuthData);
    const [formState, setFormState] = useReducer(
        (oldValue: FormSchema, newValue: Partial<FormSchema>) => ({ ...oldValue, ...newValue }),
        {
            username: '',
            password: '',
        },
    );

    const handleInput = useCallback((
        value: string,
        field: 'username' | 'password',
    ) => {
        setFormState({ [field]: value });
    }, []);

    const handleLoginClick = useCallback(async () => {
        await dispatch(loginByUsername(formState));
        if (authData && onLoginSucces) {
            onLoginSucces();
        }
    }, [formState, dispatch, onLoginSucces, authData]);

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={error} variant="error" />}
            <Input
                onChange={(value) => handleInput(value, 'username')}
                value={formState.username}
                placeholder={t('Type your username')}
                type="text"
                className={styles.input}
                autoFocus
            />
            <Input
                onChange={(value) => handleInput(value, 'password')}
                value={formState.password}
                placeholder={t('Type your password')}
                type="text"
                className={styles.input}
            />
            <Button
                className={styles.loginBtn}
                variant="outlined"
                onClick={handleLoginClick}
                disabled={isLoading}
            >
                {t('Login')}
            </Button>
        </div>
    );
}
