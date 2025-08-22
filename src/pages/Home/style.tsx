import styled from "styled-components";

interface BannerProps {
  imagem: string;
}

export const Container = styled.div`
  background: #141414;
  min-height: 100vh;
  overflow: hidden;
`;

export const Banner = styled.div<BannerProps>`
  background: url(${(props) => props.imagem}) center/cover no-repeat;
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
