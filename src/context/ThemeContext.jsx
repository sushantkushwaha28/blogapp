import { createContext } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage = () => {
    const value = localStorage.getItem("theme");
    return value
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getFormLocalStorage() || "light");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}