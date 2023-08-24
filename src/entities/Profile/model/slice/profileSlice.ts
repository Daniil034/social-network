import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/Profile';

const initialState: ProfileSchema | {} = {};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
