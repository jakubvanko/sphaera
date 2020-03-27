import styled from "styled-components";

export const Container = styled.footer`
  background-color: #eceae6;
  width: 100vw;
  max-width: 100%;
  min-height: 100px;
  padding: 5vh 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  grid-template-rows: min-content min-content;
  grid-row-gap: 26px;
  grid-column-gap: 40px;
`;

export const LinksContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SmallLink = styled.a`
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightText = styled(SmallLink)`
  color: #646565;
`;
