import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>;

    constructor(asyncThunk: AsyncThunk<Return, Arg, { rejectValue: RejectedValue }>) {
        this.asyncThunk = asyncThunk;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async call(arg: Arg) {
        const action = this.asyncThunk(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
