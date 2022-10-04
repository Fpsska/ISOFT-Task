import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Iinput } from '../../types/inputDataTypes';

// /. imports

interface IformSlice {
    inputData: Iinput[]
    directoryPath: string
    fileName: string
    isFileSelected: boolean
}

// /. interfaces

const initialState: IformSlice = {
    inputData: [],
    directoryPath: '//value/from/state/',
    fileName: 'name from state',
    isFileSelected: false
};

// /. initialState

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setInputValue(state, action: PayloadAction<Iinput>) {
            state.inputData.push(action.payload)
        },
        setDirectoryPath(state, action: PayloadAction<string>) {
            state.directoryPath = action.payload
        },
        setFileName(state, action: PayloadAction<string>) {
            state.fileName = action.payload
        },
        switchFileSelectedStatus(state, action: PayloadAction<boolean>) {
            state.isFileSelected = action.payload
        }
    }
});

export const {
    setInputValue,
    setDirectoryPath,
    setFileName,
    switchFileSelectedStatus
} = formSlice.actions;

export default formSlice.reducer;