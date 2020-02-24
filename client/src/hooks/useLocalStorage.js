import {useState} from 'react';

export const useLocalStorage = (storageKey, initalStorageValue) => {
    const [windowStorage, setWindowStorage] = useState(() => {
    const item = window.localStorage.getItem(storageKey);
        return item ? JSON.parse(item) : initalStorageValue;
});

const setValue = value =>{
    setWindowStorage(value);
    window.localStorage.setItem(storageKey,JSON.stringify(value));
};

return [windowStorage, setValue]
};