import styled, { css } from "styled-components";

interface BotaoProps {
  ativo?: boolean;
}

export const Card = styled.div`
  background-color: #111;
  border-radius: 12px;
  padding: 16px;
  width: 160px;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.08);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.7);

    img {
      transform: scale(1.1);
    }
  }

  h3 {
    font-size: 16px;
    margin: 8px 0 0;
  }
`;

export const BotaoFavorito = styled.button<BotaoProps>`
  background: transparent;
  border: none;
  font-size: 20px;
  margin-top: 8px;
  cursor: pointer;
  color: ${(props) => (props.ativo ? "red" : "white")};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.3);
    color: ${(props) => (props.ativo ? "#ff4d4d" : "#ddd")};
  }
`;
