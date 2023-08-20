import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
