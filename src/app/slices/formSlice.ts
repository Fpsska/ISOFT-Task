import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Iinput } from '../../types/inputDataTypes';

// /. imports

interface IformSlice {
    inputData: Iinput[]
    path: string
}

// /. interfaces

const initialState: IformSlice = {
    inputData: [],
    path: '//value/from/state/'
};

// /. initialState

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setInputValue(state, action: PayloadAction<Iinput>) {
            state.inputData.push(action.payload)
        }
    }
});

export const {
    setInputValue
} = formSlice.actions;

export default formSlice.reducer;