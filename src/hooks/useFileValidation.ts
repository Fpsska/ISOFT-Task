import { useState } from 'react';

// /. imports

interface exportedDataTypes {
    fileValidation: (arg1: any, arg2: (string)[]) => void
    validationError: string
}


export function useFileValidation(): exportedDataTypes {

    const [validationError, setValidationError] = useState<string>('')

    const fileValidation = (e: any, allowedFormates: (string)[]): void => {
        const fileName = e.target.files[0].name;
        let allowedExtensions = [];

        allowedExtensions = allowedFormates.map(item => item.toLowerCase().replace(/[^A-Za-z]/g, ''));

        const fileExtension = fileName.split('.').pop();

        if (!allowedExtensions.includes(fileExtension)) {
            setValidationError(`Incorrect file format, allowed only: ${allowedExtensions}`)
            console.error('Incorrect file format')
        }
    }

    return { fileValidation, validationError }
}