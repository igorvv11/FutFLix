import styled from "styled-components";

export const Container = styled.div`
    background: #141414;
    min-height: 100vh;
    `;
    
    export const Banner = styled.div`
    background: url("/banner_flamengo.jpg") center/cover no-repeat;
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
    p {
    max-width: 600px;
    font-size: 18px;
    }
`;