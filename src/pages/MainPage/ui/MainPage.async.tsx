import { FC, lazy } from 'react';

export const MainPageAsync = lazy<FC<{}>>(() => new Promise((res) => {
    setTimeout(() => res(import('./MainPage')), 2000);
}));
