import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { localStorageThemeKey } from 'features/ThemeSwitcher/lib/ThemeContext';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

type Props = {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, Props, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (e) {
            const error = e as Error;
            return thunkAPI.rejectWithValue(i18n.t('Произошла непредвиденная ошибка'));
        }
    },
);
