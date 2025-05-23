"use client"
import { Children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext();


const getFromLocalStorage = ()=>{
    if(typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "light";
}
}

export const ThemeContextProvider = ({Children})=>{
    const [theme,setTheme]=useState(()=>{
        return getFromLocalStorage();
    })
    return <ThemeContext.Provider>{Children}</ThemeContext.Provider>
}