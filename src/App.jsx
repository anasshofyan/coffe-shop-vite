import { ThemeProvider } from "styled-components"
import { theme } from "./theme"
import { GlobalStyles } from "./styles/GlobalStyles"
import MainLayout from "./layouts/MainLayout"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainLayout />
        </ThemeProvider>
    )
}

export default App
