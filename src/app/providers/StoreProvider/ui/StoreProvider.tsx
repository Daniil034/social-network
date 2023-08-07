import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

type Props = {
    children: ReactNode,
    initialState?: StateSchema
};

export function StoreProvider(props: Props) {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
