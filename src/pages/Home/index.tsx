import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { RowCategoria } from "../../components/RowCategoria";
import { Banner, Container } from "./style";
import { RootState } from "../../store";

export const Home = () => {
  const times = useSelector((state: RootState) => state.times.lista);

  return (
    <Container>
      <Header />
      <Banner>
        <h2>Flamengo</h2>
        <p>Fundado em 1895, um dos clubes mais populares e vencedores do Brasil.</p>
      </Banner>
      <RowCategoria titulo="Times Brasileiros" times={times} />
    </Container>
  );
};