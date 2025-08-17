import { createContext, useState } from "react";
import React from "react";

export type themeContextType = {
    theme: string,
    setTheme: (theme: any) => void
}

export const ThemeContext = createContext<themeContextType>({theme: "light", setTheme: () => {}});

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<string>("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}> 
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;