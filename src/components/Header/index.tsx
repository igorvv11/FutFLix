import { Link } from "react-router-dom";
import { HeaderContainer, Logo } from "./style";


export const Header = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </HeaderContainer>
  );
};