import { useState } from 'react';

// /. imports

interface exportedData {
    fileValidation: (arg1: string, arg2: any[]) => void
    validationError: string
}

export function useFileValidation(): exportedData {

    const [validationError, setValidationError] = useState<string>('')

    const fileValidation = (e: any, allowedFormates: any[]): void => {
        const fileName = e.target.files[0].name;
        let allowedExtensions = [];

        allowedExtensions = allowedFormates;

        const fileExtension = fileName.split('.').pop();

        if (!allowedExtensions.includes(fileExtension)) {
            setValidationError(`Incorrect file format, allowed only: ${allowedFormates}`)
            console.error('Incorrect file format')
        }
    }

    return { fileValidation, validationError }
}