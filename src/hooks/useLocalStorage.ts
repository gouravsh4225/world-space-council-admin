const useLocalStorage = () => {
     const getItem  = (getItemKey:string) =>{
          const localStorageItem :any = localStorage.getItem(getItemKey);
          if(localStorageItem !== null || localStorageItem !== undefined) {
               return JSON.parse(localStorageItem)
          } 
          return null;
     }
     const setItem = (setItemKey:string,setItemValue: any) => {
          return localStorage.setItem(setItemKey,JSON.stringify(setItemValue))
     } 

     const removeItem = (removeItemKey:string) => {
          return localStorage.removeItem(removeItemKey);
     }

     return {getItem,setItem,removeItem}
}

export  {useLocalStorage}