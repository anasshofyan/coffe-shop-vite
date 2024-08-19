import styled from "styled-components"
import Image from "./common/Image"
import { EnumIcons } from "../constants/EnumIcons"

const BannerSection = () => (
    <StyledBannerSection className="banner">
        <Image src={EnumIcons.HERO_2} alt="hero image" />
        <h1>Point Coffee Signature</h1>
        <StyledBadge>Our Story</StyledBadge>
    </StyledBannerSection>
)

export default BannerSection

const StyledBannerSection = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.7)
        );
        z-index: 1;
    }

    h1 {
        position: relative;
        color: ${({ theme }) => theme.colors.light};
        font-size: 3rem;
        font-family: "Times New Roman", serif;
        top: 80px;
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }
`

const StyledBadge = styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.colors.light + "50"};
    color: ${({ theme }) => theme.colors.light};
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    border-radius: 50px;
    z-index: 2;
`
