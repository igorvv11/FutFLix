import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTimes, Time } from "../../redux/timeSlice";
import { CardTime } from "../../components/CardTime";
import { AppDispatch, RootState } from "../../redux/store";

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { lista: times, loading } = useSelector((state: RootState) => state.times);

    useEffect(() => {
        dispatch(fetchTimes());
    }, [dispatch]);

if (loading) return <p>Carregando times...</p>;

return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {times.map((time: Time) => (
        <CardTime
            key={time.id}
            id={time.id}
            nome={time.nome}
            escudo={time.escudo}
        />
        ))}
    </div>
    );
};
