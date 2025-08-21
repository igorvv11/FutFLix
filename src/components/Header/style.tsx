import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #141414;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    h1 {
        color: #e50914;
        font-size: 28px;
    }

    nav {
        display: flex;
        gap: 15px;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;

        &:hover {
        color: #e50914;
        }
    }
`;

const LogoContainer = styled(Link)`
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    color: #e50914;
    font-weight: 800;
    letter-spacing: 3px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.15) rotate(-2deg);
        color: #ff1a2a;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    }
`;
export const Logo = () => {
    return <LogoContainer to="/">FutFlix</LogoContainer>
}