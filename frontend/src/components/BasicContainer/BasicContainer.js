import React from "react";
import styled from "styled-components";

import Heading from "../Heading/Heading";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 5vw;
  @media screen and (min-width: 1350px){
    padding: 7vh 9vw;
  }
  
  @media screen and (min-width: 1500px){
    padding: 9vh 12vw;
  }
`;

export const HeadingContainer = styled.div`
  padding-bottom: 2.5vh;
`;


const BasicContainer = ({heading, children}) => (
    <Container>
        <HeadingContainer>
            <Heading type={"main"}>{heading}</Heading>
        </HeadingContainer>
        {children}
    </Container>
);

export default BasicContainer;
