import styled from "styled-components";

export const Row = styled.div`
    padding: 20px;
`;

export const Titulo = styled.h2`
    margin: 0 0 10px 10px;
`;

export const Lista = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 10px;

    &::-webkit-scrollbar {
        display: none;
        }
`;