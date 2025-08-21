import { CardTime } from "../CardTime";
import { Lista, Row, Titulo } from "./style";


interface Props {
    titulo: string;
    times: { id: number; nome: string; escudo: string }[];
}

export const RowCategoria = ({ titulo, times }: Props) => {
    return (
        <Row>
        <Titulo>{titulo}</Titulo>
        <Lista>
            {times.map((time) => (
            <CardTime
                key={time.id}
                id={time.id}
                nome={time.nome}
                escudo={time.escudo}
            />
            ))}
        </Lista>
        </Row>
    );
};