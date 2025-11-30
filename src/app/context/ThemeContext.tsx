"use client"
import { createContext, ReactNode, useContext, useState } from "react";
type ThemeContextType = {
    theme: string;
    toggleTheme: ()=>void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({children}:{children:ReactNode}){
    const [theme, setTheme] = useState('light');
    const toggleTheme = () =>{
        setTheme(prev=>prev === 'light'?'dark':'light')
    }
 return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
 )
}

export function useTheme(){
 const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used inside <ThemeProvider>");
 return ctx;
}