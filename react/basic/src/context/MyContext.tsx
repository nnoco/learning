import React from 'react';

interface IValue {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}
export default React.createContext<IValue>({
    value: '',
    setValue: (value: React.SetStateAction<string>): void => {},
});