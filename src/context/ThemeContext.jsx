import {createContext, useState} from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) =>{
    const [isDarkMode,setIsDarkMode] = useState(true)
    return(
        <ThemeContext.Provider value={{isDarkMode,setIsDarkMode}}>
            {props.children}
        </ThemeContext.Provider>
    )
}