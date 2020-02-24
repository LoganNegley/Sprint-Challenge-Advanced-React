import {useState, useEffect} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';


export const useDarkMode = (key, initalValue) => {
const [darkMode, setDarkMode] = useLocalStorage(key,initalValue)

 useEffect(() => {
if(darkMode){
document.querySelector('body').classList.add('dark-mode')
}else{
document.querySelector('body').classList.remove('dark-mode')
}
  }, [darkMode]);

return [darkMode, setDarkMode]
};