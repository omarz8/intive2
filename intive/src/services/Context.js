import React, {createContext, useReducer} from 'react';
import StoreReducer, { InitialStore } from './StoreReducer';


export const DataContext = createContext()

export const DataProvider = ({ children })=>{
    const [store, dispatch] = useReducer(StoreReducer, InitialStore)

    return(
        <DataContext.Provider value={{
          store, 
          dispatch        
        }}>
            {children}
        </DataContext.Provider>
    )
}
