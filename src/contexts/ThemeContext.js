import React,  { createContext, useState } from "react";

export const TopContext = createContext()
const TopContextProvider = (props)=>{
    const [isLight,setTheme] = useState(true)
    const [isOpenModalAdd,setStateModel] = useState(false)

    const toggleTheme = ()=>{
        setTheme(!isLight)
    }

    const changeOpenModalState = ()=>{
        setStateModel(!isOpenModalAdd)
    }


    const providers = {
        isLight,
        toggleTheme,
        isOpenModalAdd,
        changeOpenModalState,
        
    }  
    return(
        <TopContext.Provider value={providers}>
            {props.children}
        </TopContext.Provider>
    )
}
export default TopContextProvider

