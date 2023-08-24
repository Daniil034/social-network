import { Countries } from './Countries';
import { Currency } from './Currency';

export type ProfileSchema = {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Countries,
    city: string,
    username: string,
    avatar: string
}
