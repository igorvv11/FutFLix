import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Header } from "../../components/Header";
import { CardTime } from "../../components/CardTime";
import { ContainerFav, Grid } from "./style";

export const Favoritos = () => {
    const { lista, favoritos } = useSelector((state: RootState) => state.times);

    const timesFavoritos = lista.filter((time) =>
        favoritos.includes(time.id)
    );

    return (
        <ContainerFav>
        <Header />
        <h2>Meus Times Favoritos</h2>
        {timesFavoritos.length === 0 ? (
            <p>Nenhum time favoritado ainda.</p>
        ) : (
            <Grid>
            {timesFavoritos.map((time) => (
                <CardTime key={time.id} id={time.id} nome={time.nome} escudo={time.escudo} />
            ))}
            </Grid>
        )}
        </ContainerFav>
    );
};