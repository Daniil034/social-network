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
            <h1 data-testid="counter-value-test">
                value =
                {counterValue}
            </h1>
            <Button data-testid="counter-increment-test" onClick={increment}>increment</Button>
            <Button data-testid="counter-decrement-test" onClick={decrement}>decrement</Button>
        </div>
    );
}
