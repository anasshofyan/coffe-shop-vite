import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import MainLayout from "./layouts/MainLayout"
import { GlobalStyles } from "./styles/Global.styles"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainLayout />
        </ThemeProvider>
    )
}

export default App
