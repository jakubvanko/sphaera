import React from "react";
import styled from "styled-components";
import Icon from "../../../components/Icon/Icon";

const ColorfulBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-left: -30px;
  margin-right: -30px;
  @media(min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media(min-width: 500px) {
    margin: 0;
  }
  
  @media(min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ColorfulBlockContainer = styled.a`
  height: 90px;
  width: 100%;
  font-size: 1.3em;
  font-weight: bold;
  padding: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$color || "black"};
  
  :hover {
    text-decoration: underline;
  }
`;

const ColorfulBlock = ({text, $color, ...props}) => (
    <ColorfulBlockContainer $color={$color} {...props}>
        {text}
        <Icon name={"arrowright"} $fill={$color}/>
    </ColorfulBlockContainer>
);

const ColorfulBlocks = () => (
    <ColorfulBlocksContainer>
        <ColorfulBlock $backgroundColor={"#000"} $color={"white"} text={"Maps"}/>
        <ColorfulBlock $backgroundColor={"#89c485"} text={"Transport"}/>
        <ColorfulBlock $backgroundColor={"#eceae6"} text={"Parking"}/>
        <ColorfulBlock $backgroundColor={"#f4693d"} text={"Security"}/>
    </ColorfulBlocksContainer>
);

export default ColorfulBlocks;
