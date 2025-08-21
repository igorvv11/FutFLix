// src/components/Home.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../../store";
import { setLoading,setLista } from "../../store/slices/timesSlice";

import { CardTime } from "../../components/CardTime";

export const Home = () => {
  const dispatch = useDispatch();
  const times = useSelector((state: RootState) => state.times.lista);
  const loading = useSelector((state: RootState) => state.times.loading);

  useEffect(() => {
    const fetchTimes = async () => {
      dispatch(setLoading(true));
      try {
        const response = await axios.get(
          "https://api.api-futebol.com.br/v1/teams?league=30&season=2025",
          {
            headers: {
              Authorization: "Bearer live_72519a1c0146d49dc7cb1f7d30d530",
            },
          }
        );
        const timesData = response.data.response
          .filter((t: any) =>
            [
              "Flamengo",
              "Palmeiras",
              "Corinthians",
              "São Paulo",
              "Santos",
              "Grêmio",
              "Internacional",
              "Atlético Mineiro",
              "Cruzeiro",
              "Vasco",
            ].includes(t.team.name)
          )
          .map((t: any) => ({
            id: t.team.id,
            nome: t.team.name,
            escudo: t.team.logo,
            banner: `/banners/banner_${t.team.name
              .toLowerCase()
              .replace(" ", "_")}.jpg`,
            historia: `História do ${t.team.name}`,
            titulos: [],
            idolos: [],
          }));
        dispatch(setLista(timesData));
      } catch (error) {
        console.error("Erro ao buscar os times:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTimes();
  }, [dispatch]);

  if (loading) return <p>Carregando times...</p>;

  return (
    <div>
      <h1>Times do Campeonato Brasileiro 2025</h1>
      <div>
        {times.map((time) => (
          <CardTime
            key={time.id}
            id={time.id}
            nome={time.nome}
            escudo={time.escudo}
          />
        ))}
      </div>
    </div>
  );
};
