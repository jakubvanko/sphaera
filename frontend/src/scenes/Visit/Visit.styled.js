import styled from "styled-components";

import image from "./assets/test1.jpg"

export const Container = styled.div`
    
`;

export const MainImage = styled.div`
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - var(--nav-height) + 5px);
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MainText = styled.div`
  color: white;
  font-size: 10em;
  font-weight: bold;
`;
