import { useDispatch, useSelector } from "react-redux";
import { toggleFavorito } from "../../store/slices/timesSlice";
import { BotaoFavorito, Card } from "./style";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";

interface Props {
  nome: string;
  escudo: string;
  id: number; 
}

export const CardTime = ({ nome, escudo, id }: Props) => {
  const dispatch = useDispatch();
  const favoritos = useSelector((state: RootState) => state.times.favoritos);
  const ativo = favoritos.includes(id);
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/time/${id}`)}>
      <img src={escudo} alt={nome} />
      <h3>{nome}</h3>
      <BotaoFavorito
        ativo={ativo}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleFavorito(id));
        }}
      >
        {ativo ? "♥" : "♡"}
      </BotaoFavorito>
    </Card>
  );
};