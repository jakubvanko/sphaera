import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 9vh 12vw 0 12vw;
`;

export const HeadingContainer = styled.div`
  padding-bottom: 2vh;
`;

export const ItemContainer = styled.div`
  padding: 0 5vw;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1vw;
  grid-row-gap: 2vh;
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

const ItemSectionBase = styled.div`
  padding: 4vh 3vw;
`;

export const ItemHeader = styled(ItemSectionBase)`
  width: 100%;
  font-size: 2.4rem;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const InformationContainer = styled(ItemSectionBase)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-areas: "text text code" "text text code";
  grid-row-gap: 20px;
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
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4px;
  align-items: flex-end;
`;
