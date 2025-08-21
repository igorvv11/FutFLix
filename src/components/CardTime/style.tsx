import styled from "styled-components";


export const Card = styled.div`
    min-width: 200px;
    background: #222;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.08);
        cursor: pointer;
    }

    img {
        width: 100%;
        height: 120px;
        object-fit: cover;
    }

    h3 {
        padding: 10px;
        font-size: 16px;
    }
`;

export const BotaoFavorito = styled.button<{ ativo: boolean }>`
    position: absolute;
    top: 8px;
    right: 8px;
    background: ${(props) => (props.ativo ? "#e50914" : "#333")};
    border: none;
    color: #fff;
    padding: 6px 10px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background: #e50914;
    }
`;
