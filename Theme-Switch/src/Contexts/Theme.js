import { createContext , useContext } from "react";

// Another syntax of creating context and using it . this is easier to understand syntax  
// passing some variables and functionsin context directly

export const ThemeContext = createContext(
    {
        ThemeMode : "light" , 
        DarkTheme : ()=> {} , 
        LightTheme : () => {}
    }
)

export const ThemeProvider = ThemeContext.Provider

// custom hook : 
export default function useTheme()
{
    return useContext(ThemeContext)     
}

