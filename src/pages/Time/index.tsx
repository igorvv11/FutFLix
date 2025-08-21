import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header";
import { RootState } from "../../store";
import { Banner, ContainerTime, Info } from "./style";
import { toggleFavorito } from "../../store/slices/timesSlice";


export const Time = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const time = useSelector((state: RootState) =>
    state.times.lista.find((t) => t.id === Number(id))
  );
  const favoritos = useSelector((state: RootState) => state.times.favoritos);
  const ativo = favoritos.includes(Number(id));

  if (!time) {
    return (
      <ContainerTime>
        <Header />
        <p style={{ padding: "40px" }}>Time não encontrado.</p>
      </ContainerTime>
    );
  }

  return (
    <ContainerTime>
      <Header />
      <Banner imagem={time.banner}>
        <h2>{time.nome}</h2>
      </Banner>
      <Info>
        <img src={time.escudo} alt={time.nome} />
        <div>
          <h3>História</h3>
          <p>{time.historia}</p>

          <h3>Títulos</h3>
          <ul>
            {time.titulos.map((titulo, i) => (
              <li key={i}>{titulo}</li>
            ))}
          </ul>

          <h3>Ídolos</h3>
          <ul>
            {time.idolos.map((idolo, i) => (
              <li key={i}>{idolo}</li>
            ))}
          </ul>

          <button onClick={() => dispatch(toggleFavorito(time.id))}>
            {ativo ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
          </button>
        </div>
      </Info>
    </ContainerTime>
  );
};
