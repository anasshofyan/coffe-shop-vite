import { Instagram, MapPin, Menu } from "lucide-react"
import { EnumIcons } from "../constants/EnumIcons"
import Navbar, {
    NavbarWrapper,
    NavIcons,
    NavItem,
    NavMenu,
} from "../components/Navbar"
import Logo from "../components/common/Logo"
import { ShowOnDesktop, ShowOnMobile } from "../styles/Global.styles"
import Button from "../components/common/Button"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <Navbar role="navbar">
                <NavbarWrapper role="navbar-wrapper">
                    <ShowOnMobile>
                        <NavIcons role="nav-icons">
                            <Button role="button" variant="secondary">
                                <Menu size={30} />
                            </Button>
                        </NavIcons>
                    </ShowOnMobile>
                    <ShowOnMobile>
                        <Button role="button" variant="secondary">
                            <Logo src={EnumIcons.LOGO_WHITE} />
                        </Button>
                    </ShowOnMobile>
                    <ShowOnDesktop>
                        <Logo role="img" src={EnumIcons.LOGO_WHITE} />
                    </ShowOnDesktop>
                    <ShowOnDesktop>
                        <NavMenu role="menu">
                            <NavItem role="nav-item">Promotions</NavItem>
                            <NavItem role="nav-item">Menu</NavItem>
                            <NavItem role="nav-item">Fun Fact</NavItem>
                            <NavItem role="nav-item">Our Story</NavItem>
                            <NavItem role="nav-item">Feedback</NavItem>
                            <NavItem role="nav-item">Membership</NavItem>
                        </NavMenu>
                    </ShowOnDesktop>
                    <ShowOnDesktop>
                        <NavIcons role="menu">
                            <Instagram
                                size={30}
                                style={{ marginTop: "10px" }}
                            />
                            <MapPin size={30} style={{ marginTop: "10px" }} />
                        </NavIcons>
                    </ShowOnDesktop>
                </NavbarWrapper>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default MainLayout
