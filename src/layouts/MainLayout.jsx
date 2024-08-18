import Button, { Nav } from "../components/common/Button/Button"

/* eslint-disable react/prop-types */
const MainLayout = ({ children }) => {
    return (
        <div>
            <h1>Main Layout</h1>
            {children}
            <Button>Click me</Button>
            <Nav>Click me</Nav>
        </div>
    )
}

export default MainLayout
