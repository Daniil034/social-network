import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUsername';

export type StateSchema = {
    counter: CounterSchema,
    user: UserSchema,
    login: LoginSchema
}
