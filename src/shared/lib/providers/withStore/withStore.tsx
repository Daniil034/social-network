import { ReactNode } from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export function withStore(initialState?: DeepPartial<StateSchema>) {
    return function (children: ReactNode) {
        return (
            <StoreProvider initialState={initialState as StateSchema}>
                {children}
            </StoreProvider>
        );
    };
}
