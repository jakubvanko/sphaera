import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
`;

export const HeadingContainer = styled.div`
  padding: 9vh 12vw 2vh 12vw;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const ItemImage = styled.div`
  background-image: url("${props => props.$src}");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  border: solid 1px rgb(198, 198, 198);
  border-radius: 4px;
`;

export const ItemHeader = styled.div`
  width: 100%;
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
`;

export const IconContainer = styled.div`
  background-color: black;
  border-radius: 100vw;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas: "text text code" "text text code";
  grid-row-gap: 20px;
  padding: 30px 40px;
  border-bottom: dashed 1px #b2b2b2;
  border-top: dashed 1px #b2b2b2;
`;

export const BigText = styled.div`
  font-weight: 600;
  font-size: 1.3em;
`;

export const SmallTextLabel = styled.div`
  color: #757575;
  font-size: 0.85em;
  padding-bottom: 5px;
`;

export const CodeContainer = styled.div`
  grid-area: code;
  align-self: center;
  justify-self: flex-end;
`;

export const DeleteContainer = styled.div`
  font-size: 0.8rem;
  text-transform: none;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
`;
