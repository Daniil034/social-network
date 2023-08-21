import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { isDefinedAndExists } from 'shared/lib/helpers/validators';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
) {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers);
    let keysToRemove: (keyof StateSchema)[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema | undefined, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                if (!isDefinedAndExists(state)) {
                    return combinedReducer(state, action);
                }
                state = { ...state };
                keysToRemove.forEach((key) => {
                    // eslint-disable-next-line no-unused-expressions
                    isDefinedAndExists(state) && delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: keyof StateSchema, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key: keyof StateSchema) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}

export type ReducerManager = ReturnType<typeof createReducerManager>
