import { getCounter } from 'entities/counter/model/selectors/getCounter/getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('returns counter state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 100,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 100 });
    });
});
