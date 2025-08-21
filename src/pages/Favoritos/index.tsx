import { useSelector } from "react-redux";
import { RootState} from "../../store";
import { Header } from "../../components/Header";
import { CardTime } from "../../components/CardTime";
import { ContainerFav, ListaCards } from "./style";

export const Favoritos = () => {
    const times = useSelector((state: RootState) => state.times.lista);
    const favoritos = useSelector((state: RootState) => state.times.favoritos);
    const timesFavoritos = times.filter(time => favoritos.includes(time.id));

    return (
        <ContainerFav>
        <Header />
        <h2 style={{ padding: "20px 0 0 20px" }}>Meus Favoritos</h2>
        {timesFavoritos.length === 0 ? (
            <p style={{ padding: "20px" }}>Nenhum time favoritado ainda.</p>
        ) : (
            <ListaCards>
            {timesFavoritos.map(time => (
                <CardTime key={time.id} id={time.id} nome={time.nome} escudo={time.escudo} />
            ))}
            </ListaCards>
        )}
        </ContainerFav>
    );
    };
