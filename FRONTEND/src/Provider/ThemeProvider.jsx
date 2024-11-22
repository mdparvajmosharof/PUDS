import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");

    useEffect(()=>{
        const root = document.documentElement;

        root.setAttribute("data-theme", theme);

        if(theme === "dark"){
            root.classList.add("dark");
        }
        else{
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme)

    },[theme])
    
    const toggleTheme = () =>{
        setTheme(pTheme => (pTheme === "light"? "dark" : "light"))
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
