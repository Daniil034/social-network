import { ReactNode, Suspense, useEffect } from 'react';
import { useStore } from 'react-redux';
import { StateSchemaKey, StoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { Loader } from 'shared/ui/Loader/Loader';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type Props = {
    children: ReactNode,
    reducers: ReducersList,
    removeAfterUnmount?: boolean
};

export function DynamicModuleLoader(props: Props) {
    const {
        children,
        reducers,
        removeAfterUnmount = false,
    } = props;
    const store = useStore() as StoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                });
            }
        };
    }, [reducers, removeAfterUnmount, store.reducerManager]);

    return (
        <Suspense fallback={<Loader />}>
            {children}
        </Suspense>
    );
}
