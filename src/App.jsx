import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import MainLayout from "./layouts/MainLayout"
import { GlobalStyles } from "./styles/Global.styles"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import "react-multi-carousel/lib/styles.css"
import MenuPage from "./pages/MenuPage"
import OurStoryPage from "./pages/OurStoryPage"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/our-story" element={<OurStoryPage />} />
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export default App
