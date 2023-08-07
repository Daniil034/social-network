import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('increment value on increment action', () => {
        const state: CounterSchema = {
            value: 100,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({
            value: 101,
        });
    });

    test('decrement value on decrement action', () => {
        const state: CounterSchema = {
            value: 100,
        };
        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({
            value: 99,
        });
    });

    test('works with undefined state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({
                value: 1,
            });
    });
});
