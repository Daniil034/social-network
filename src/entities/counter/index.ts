import { Counter } from './ui/Counter';
import { CounterSchema } from './model/types/CounterSchema';
import { counterReducer } from './model/slice/counterSlice';
import { getCounter } from './model/selectors/getCounter/getCounter';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';

const counterSelectors = {
    getCounter,
    getCounterValue,
};

export {
    Counter,
    CounterSchema,
    counterReducer,
    counterSelectors,
};
