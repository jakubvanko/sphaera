import QRCode from "qrcode.react";
import styled from "styled-components";

import {ContainerSectioned} from "../Container";
import {CircleIcon} from "../Icon";

export const Container = styled(ContainerSectioned)`
  // The Ticket circle cut-out
  :after {
    content: " ";
    position: absolute;
    top: calc(50% - 21px);
    right: -1px;
    width: 20px;
    height: 40px;
    background-color: white;
    border-top-left-radius: 1100px;
    border-bottom-left-radius: 1100px;
    border: 1px solid var(--color-gray-8);
    border-right: 0;
    display: none;
    
    @media screen and (min-width: 500px){
      display: block;
    }
  }
`;

export const StyledCircleIcon = styled(CircleIcon)`
  display: none;
  @media screen and (min-width: 450px){
    display: flex;
  }
`;

export const Code = styled(QRCode)`
  grid-area: code;
  align-self: center;
  display: none;
  @media screen and (min-width: 450px){
    display: block;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  
  @media screen and (min-width: 450px){
    grid-template-columns: max-content max-content max-content;
    grid-template-areas: "text text code" "text text code";
  }
`;
