
import React from "react";

interface CardTimeProps {
  id: number;
  nome: string;
  escudo: string;
}

export const CardTime: React.FC<CardTimeProps> = ({ id, nome, escudo }) => {
  return (
    <div>
      <img src={escudo} alt={nome} />
      <h3>{nome}</h3>
    </div>
  );
};
