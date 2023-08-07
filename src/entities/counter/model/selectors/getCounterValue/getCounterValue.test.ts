import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('returns counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 100,
            },
        };
        expect(getCounterValue(state as StateSchema)).toBe(100);
    });
});
