import { useEffect, useState } from "react";
import api from "../services/api";
    
export interface Time {
    id: number;
    nome: string;
    escudo: string;
    }
    
export const useTimes = () => {
    const [times, setTimes] = useState<Time[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTimes = async () => {
        try {
            const response = await api.get("/teams");
            const lista = response.data.map((t: any) => ({
            id: t.team.id,
            nome: t.team.name,
            escudo: t.team.logo,
            }));
            setTimes(lista);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
        };
        fetchTimes();
    }, []);
    console.log(times);
    
    return { times, loading };
    };
