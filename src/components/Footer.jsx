import styled from "styled-components"
import { EnumIcons } from "../constants/EnumIcons"
import Container from "./common/Container"
import Grid from "./common/Grid"
import Logo from "./common/Logo"
import Title from "./common/Title"
import { ShowOnDesktop, ShowOnMobile } from "../styles/Global.styles"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => (
    <StyledFooter>
        <Container>
            <Grid align="start" columns="1fr 2fr">
                <ShowOnDesktop>
                    <div>
                        <Logo
                            width={80}
                            height={80}
                            src={EnumIcons.LOGO_DEFAULT}
                            alt="logo"
                        />
                        <p>©2023 PT. INDOMARCO PRISMATAMA</p>
                    </div>
                </ShowOnDesktop>
                <Grid align="start" columns="1fr 1fr 2fr">
                    <ShowOnDesktop>
                        <FooterColumn>
                            <Title size="1.2rem">Products</Title>
                            <StyledList>
                                <li>Cofffee</li>
                                <li>Kopi Baper Espresso</li>
                                <li>Kopi Baper Coldbrew</li>
                                <li>Frappe Milk Series</li>
                                <li>Tea Series</li>
                                <li>Milik Indonesia</li>
                                <li>Hidup Sehat</li>
                                <li>Merchandise</li>
                            </StyledList>
                        </FooterColumn>
                    </ShowOnDesktop>
                    <ShowOnDesktop>
                        <FooterColumn>
                            <Title size="1.2rem">Informations</Title>
                            <StyledList>
                                <li>Promotions</li>
                                <li>Fun Fact </li>
                                <li>Our Story</li>
                                <li>Feedback</li>
                                <li>Location</li>
                            </StyledList>
                        </FooterColumn>
                    </ShowOnDesktop>
                    <FooterColumn>
                        <Title size="1.2rem">Contact us</Title>
                        <StyledList>
                            <li>Location</li>
                            <li>
                                MENARA INDOMARET - Jalan Boulevard Pantai Indah
                                Kapuk, Kel. Kamal Muara, Kec. Penjaringan, Kota
                                Adm. Jakarta Utara, Provinsi DKI Jakarta, Kode
                                Pos: 14470 Telp : 02150897400
                                <ListMedsos>
                                    <Instagram size={24} />
                                    <Twitter size={24} />
                                    <Facebook size={24} />
                                </ListMedsos>
                                <ShowOnMobile>
                                    <p>©2023 PT. INDOMARCO PRISMATAMA</p>
                                </ShowOnMobile>
                            </li>
                        </StyledList>
                    </FooterColumn>
                </Grid>
            </Grid>
        </Container>
    </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
    background-color: #f7f7f7;
    padding: 60px 0;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledList = styled.ul`
    list-style: none; /* Remove default bullet points */
    padding: 0; /* Remove default padding */
    margin: 0; /* Remove default margin */

    li {
        margin-bottom: 10px; /* Add space between list items */
        font-size: 1rem; /* Adjust font size as needed */
    }

    li:last-child {
        margin-bottom: 0; /* Remove margin for the last item */
    }

    @media (max-width: 768px) {
        li {
            text-align: center;
        }
    }
`

const ListMedsos = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 16px;

    &:hover {
        cursor: pointer;
    }
`
