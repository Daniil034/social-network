import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { StateSchema } from 'app/providers/StoreProvider';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let asyncThunk: TestAsyncThunk<any, any, any>;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
        jest.resetAllMocks();
        asyncThunk = new TestAsyncThunk(loginByUsername);
    });

    test('calls axios.post 1 time', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
        // const asyncThunk = new TestAsyncThunk(loginByUsername);
        asyncThunk.call({ username: '123', password: '123' });
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    test('on a success request settles with a fulfilled status', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '123' } }));
        // const asyncThunk = new TestAsyncThunk(loginByUsername);
        const result = await asyncThunk.call({ username: '123', password: '123' });
        expect(result.meta.requestStatus).toBe('fulfilled');
    });

    test('on a success request '
        + 'resolves with the same value as returned '
        + 'from axios.post', async () => {
        const userData = { username: '123', id: '123' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        await asyncThunk.call(userData);
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    });

    test('on a rejected request settles with a rejected status', async () => {
        mockedAxios.post.mockRejectedValue({ status: 403 });
        const result = await asyncThunk.call({ username: '123', password: '123' });
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
