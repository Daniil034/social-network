import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUsername';
import { EnhancedStore } from '@reduxjs/toolkit';
import { ReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { ProfileSchema } from 'entities/Profile';

export type StateSchema = {
    counter: CounterSchema,
    user: UserSchema,
    login?: LoginSchema,
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
