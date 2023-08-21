import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/reduxHooks';
import React, { useCallback, useEffect, useReducer } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { selectUserAuthData } from 'entities/User';
import { useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername';
import styles from './LoginForm.module.scss';
import { selectLoginState } from '../../model/selectors/selectLoginState';
import { loginReducer } from '../../model/slice/loginSlice';

export type LoginFormProps = {
    className?: string;
    onLoginSuccess?: Function
};

type FormSchema = {
    username: string,
    password: string,
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

export default function LoginForm(props: LoginFormProps) {
    const { className, onLoginSuccess } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const loginState = useAppSelector(selectLoginState);
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
        if (authData && onLoginSuccess) {
            onLoginSuccess();
        }
    }, [formState, dispatch, onLoginSuccess, authData]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {loginState?.error && <Text text={loginState.error} variant="error" />}
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
                    disabled={loginState?.isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
}
