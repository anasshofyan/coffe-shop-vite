import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import MainLayout from "./layouts/MainLayout"
import { GlobalStyles } from "./styles/Global.styles"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
