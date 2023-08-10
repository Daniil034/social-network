import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/User';

export type StateSchema = {
    counter: CounterSchema,
    user: UserSchema
}
