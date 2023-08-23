import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { selectLoginState } from './selectLoginState';

describe('selectLoginState', () => {
    test('returns login piece of state', () => {
        const loginState = {
            isLoading: false,
            username: '',
            password: '',
        };
        const state: DeepPartial<StateSchema> = {
            login: loginState,
        };
        expect(selectLoginState(state as StateSchema)).toEqual(loginState);
    });
    test('returns undefined on empty piece of state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectLoginState(state as StateSchema)).toEqual(undefined);
    });
});
