import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Ifile } from '../../types/fileDataTypes';

// /. imports

interface IformSlice {
    directoryPath: string
    fileName: string
    fileContent: Ifile[]
    isFileSelected: boolean
}

// /. interfaces

const initialState: IformSlice = {
    directoryPath: '//value/from/state/',
    fileName: 'name from state',
    fileContent: [],
    isFileSelected: false
};

// /. initialState

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setDirectoryPath(state, action: PayloadAction<string>) {
            state.directoryPath = action.payload
        },
        setFileName(state, action: PayloadAction<string>) {
            state.fileName = action.payload
        },
        setFileContent(state, action: PayloadAction<{ id: number, value: string }>) {
            state.fileContent.push(action.payload)
        },
        switchFileSelectedStatus(state, action: PayloadAction<boolean>) {
            state.isFileSelected = action.payload
        },
    }
});

export const {
    setDirectoryPath,
    setFileName,
    setFileContent,
    switchFileSelectedStatus
} = formSlice.actions;

export default formSlice.reducer;