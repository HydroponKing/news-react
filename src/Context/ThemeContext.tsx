import { createContext, useContext, useState } from "react"

interface ThemeContextType {
    isDark: boolean
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{isDark, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
