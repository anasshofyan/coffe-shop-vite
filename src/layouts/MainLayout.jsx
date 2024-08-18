/* eslint-disable react/prop-types */
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

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar>
                <NavbarWrapper>
                    <ShowOnMobile>
                        <NavIcons>
                            <Button variant="secondary">
                                <Menu size={30} />
                            </Button>
                        </NavIcons>
                    </ShowOnMobile>
                    <ShowOnMobile>
                        <Button variant="secondary">
                            <Logo src={EnumIcons.LOGO_WHITE} />
                        </Button>
                    </ShowOnMobile>
                    <ShowOnDesktop>
                        <Logo src={EnumIcons.LOGO_WHITE} />
                    </ShowOnDesktop>
                    <ShowOnDesktop>
                        <NavMenu>
                            <NavItem>Promotions</NavItem>
                            <NavItem>Menu</NavItem>
                            <NavItem>Fun Fact</NavItem>
                            <NavItem>Our Story</NavItem>
                            <NavItem>Feedback</NavItem>
                            <NavItem>Membership</NavItem>
                        </NavMenu>
                    </ShowOnDesktop>
                    <ShowOnDesktop>
                        <NavIcons>
                            <Instagram
                                size={30}
                                style={{ marginTop: "10px" }}
                            />
                            <MapPin size={30} style={{ marginTop: "10px" }} />
                        </NavIcons>
                    </ShowOnDesktop>
                </NavbarWrapper>
            </Navbar>
            {children}
        </div>
    )
}

export default MainLayout
