import { useDispatch, useSelector } from "react-redux";
import { toggleFavorito } from "../../redux/timeSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { Card } from "./style";
import { BotaoFavorito } from "./style";

interface Props {
    nome: string;
    escudo: string;
    id?: number;
}

export const CardTime = ({ nome, escudo, id }: Props) => {
    const dispatch = useDispatch();
    const favoritos = useSelector((state: RootState) => state.times.favoritos);
    const ativo = favoritos.includes(id || 0);
    const navigate = useNavigate();

    return (
        <Card onClick={() => id && navigate(`/time/${id}`)}>
        <img src={escudo} alt={nome} />
        <h3>{nome}</h3>
        {id && (
            <BotaoFavorito
            ativo={ativo}
            onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleFavorito(id));
            }}
            >
            {ativo ? "♥" : "♡"}
            </BotaoFavorito>
        )}
        </Card>
    );
};