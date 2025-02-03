/* 
For Memory game by Tay King Yu, Galen
Reference - React Custom Hooks: useLocalStorage - Simply Explained!
https://www.youtube.com/watch?v=1uiNxQIpcLU&t=437s&ab_channel=CosdenSolutions
*/
export const useLocalStorage = (key) => {
    const setItem = (value) => {
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
        }catch(error){
            console.log(error);
        }
    };

    const getItem = () => {
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch(error){
            console.log(error);
        }
    }
    return { getItem , setItem };
}