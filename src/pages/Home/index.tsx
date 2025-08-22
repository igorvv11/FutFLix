import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import {  Container } from "./style";
import { RootState } from "../../store";
import { Carrossel } from "../../components/Carroussel";

export const Home = () => {
  const times = useSelector((state: RootState) => state.times.lista);

  return (
    <Container>
      <Header />
      <Carrossel />
    </Container>
  );
};