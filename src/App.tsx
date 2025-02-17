import Header from "./Components/Header/Header.tsx";
import Main from "./pages/Main/Main.tsx";
import { useTheme } from "./Context/ThemeContext.tsx";

function App() {
  const {isDark} = useTheme()
  return (
        <div className={`app ${isDark ? 'dark' : 'light'}`}>
            <Header />
            <div className="container">
            <Main/>
        </div>
    </div>
  )
}

export default App
