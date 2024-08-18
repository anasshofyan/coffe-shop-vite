import styled from "styled-components"

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
        display: flex;
    }

    @media (max-width: 768px) {
        padding: 0 10px;
        display: flex;
    }

    @media (max-width: 480px) {
        padding: 0 5px;
    }
`

export default Container
