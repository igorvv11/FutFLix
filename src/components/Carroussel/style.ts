import styled from "styled-components";

export const ContainerCarrossel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    `;

export const BannerCarrossel = styled.div<{ imagem: string }>`
    max-width: 1080px;
    width: 100%;
    height: 480px;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    color: #fff;
    margin: 0 auto;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent),
        url(${(props) => props.imagem}) center/cover no-repeat;

    h2 {
        font-size: 36px;
        display: flex;
        align-items: center;
        gap: 16px;
        margin: 0;
    }

    p {
        font-size: 16px;
        max-width: 600px;
        margin-top: 8px;
    }

    img.logo {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        height: 300px;

        h2 {
        font-size: 28px;
        gap: 12px;
        }

        img.logo {
        width: 40px;
        height: 40px;
        }

        p {
        font-size: 14px;
        max-width: 90%;
        }
    }
    `;
    
export const CardsWrapper = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding-bottom: 12px;
    width: 100%;
    scroll-behavior: smooth;
    overflow-y:
    
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }

    div {
        flex: 0 0 auto; /* garante que cada card não encolha */
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    div:hover {
        transform: scale(1.1);
    }
    `;
