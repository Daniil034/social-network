import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export function Counter() {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="counter-value-test">
                value =
                {counterValue}
            </h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="counter-increment-test" onClick={increment}>increment</Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button data-testid="counter-decrement-test" onClick={decrement}>decrement</Button>
        </div>
    );
}
