import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
  switchFileSelectedStatus,
  setDirectoryPath,
  setFileName,
  setFileContent
} from '../../app/slices/formSlice';

import './file-input.scss';

// /. imports

interface propTypes {
  fileValidation: (arg1: any, arg2: string[]) => void;
}

// /. interfaces

const FileInput: React.FC<propTypes> = ({ fileValidation }) => {
  const dispatch = useAppDispatch();

  const handleInputFile = (e: any): void => {
    const path = e.target.value;
    const fileName = e.target.files[0].name;

    dispatch(switchFileSelectedStatus(true));
    dispatch(setDirectoryPath(path));
    dispatch(setFileName(fileName));

    // read document data
    readFileData(e);
    // validation for file type
    fileValidation(e, ['.txt']);
  };

  const readFileData = (e: any): void => {
    const fileReader = new FileReader();

    fileReader.readAsText(e.target.files[0]);

    fileReader.onload = (): void => {
      dispatch(
        setFileContent({ id: +new Date(), value: String(fileReader.result) })
      );
    };

    fileReader.onerror = (): void => {
      console.error(fileReader.error);
    };
  };

  return (
    <div className="input-file">
      <form className="input-file__form" onSubmit={e => e.preventDefault()}>
        <label className="input-file__label">
          <span>Choose file</span>
          <input
            className="input-file__input"
            type="file"
            accept=".txt"
            onChange={e => handleInputFile(e)}
          />
        </label>
      </form>
    </div>
  );
};

export default FileInput;
