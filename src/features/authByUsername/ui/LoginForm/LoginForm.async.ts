import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginForm = lazy<FC<LoginFormProps>>(() => new Promise((res) => {
    setTimeout(() => res(import('./LoginForm')), 2000);
}));
