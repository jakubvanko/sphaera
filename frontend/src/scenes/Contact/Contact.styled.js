import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ContentContainer = styled.div`
  
`;

export const ColorfulBlocksContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 80px
`;

export const ColorfulBlock = styled.div`
  height: 220px;
  width: 100%;
  font-size: 1.8em;
  font-weight: bold;
  padding: 30px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.$backgroundColor};
  background-image: ${props => props.$src && `url("${props.$src}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.$color || "black"};
  display: flex;
  
  justify-content: space-between;
  
  :hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  align-self: flex-end;
`;
