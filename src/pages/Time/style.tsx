import styled from "styled-components";

export const ContainerTime = styled.div`
    background: #141414;
    min-height: 100vh;
    color: #fff;
`;

export const Banner = styled.div<{ imagem?: string }>`
    background: url(${(props) => props.imagem || "/default_banner.jpg"})
        center/cover no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px;
    color: #fff;

    h2 {
        font-size: 48px;
        margin-bottom: 10px;
    }
`;

export const Info = styled.div`
    display: flex;
    gap: 20px;
    padding: 40px;

    img {
        width: 150px;
        height: 150px;
        object-fit: contain;
        background: #fff;
        border-radius: 8px;
        padding: 10px;
    }

    div {
    max-width: 600px;
    }

    button {
    margin-top: 15px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: #e50914;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    }
`;