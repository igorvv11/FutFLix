import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CardTime } from "../CardTime";
import { ContainerCarrossel, CardsWrapper, BannerCarrossel } from "./style";

export const Carrossel = () => {
    const times = useSelector((state: RootState) => state.times.lista);
    const [timeAtual, setTimeAtual] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) return;
        const interval = setInterval(() => {
        setTimeAtual((prev) => (prev + 1) % times.length);
        }, 100000);
        return () => clearInterval(interval);
    }, [times.length, pause]);

    if (times.length === 0) return null;

    const time = times[timeAtual];

    return (
        <ContainerCarrossel>
        <BannerCarrossel imagem={time.banner}>
            <h2>
            <img className="logo" src={time.escudo} alt={time.nome} />
            {time.nome}
            </h2>
            <p>{time.historia}</p>
        </BannerCarrossel>

        <CardsWrapper>
            {times.map((t, index) => (
            <div
                key={t.id}
                onMouseEnter={() => {
                setTimeAtual(index);
                setPause(true);
                }}
                onMouseLeave={() => setPause(false)}
            >
                <CardTime nome={t.nome} escudo={t.escudo} id={t.id} />
            </div>
            ))}
        </CardsWrapper>
        </ContainerCarrossel>
    );
    };
