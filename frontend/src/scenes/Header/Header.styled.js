import styled from "styled-components";

export const Container = styled.header`
  background-color: white;
  width: 100vw;
  max-width: 100%;
  height: var(--nav-height);
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  color: black;
  font-weight: bolder;
  border-bottom: 1px solid #eceae6;
  
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(5, auto);
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: ${props => props.$mobileActive ? "200px" : 0};
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  white-space: nowrap;
  background-color: inherit;
  
  @media only screen and (min-width: 992px) {
    position: static;
    flex-direction: row;
    width: auto;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0 5.5vw;
  }
`;

export const LinkContainer = styled.li`
  padding: 10px 30px;
  letter-spacing: 1px;
  border-bottom: 1px solid rgb(54, 54, 54);
  user-select: none;
  
  @media only screen and (min-width: 992px) {
    border-bottom: none;
    display: ${props => props.$display && props.$display};
  }
`;

export const CloseButton = styled.button`
  color: white;
  font-weight: 800;
  font-size: 17px;
  background: black;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 2px 6px;
  align-self: flex-end;
  
  :after {
    content: "\\2573";
  }
  :hover:after {
    content: "\\2501";
  }
  
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  border-bottom: transparent 2px solid;
  
  :hover {
    border-bottom: black 2px solid;
  }
`;

export const IconLinkContainer = styled.a`
  display: none;
  color: #9a9a9a;
  font-weight: normal;
  font-size: 14px;
  height: 100%;
  cursor: pointer;
  user-select: none;
  *:hover {
    border-bottom: transparent 2px solid;
  }
  
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;
    align-content: center;
    grid-row-gap: 7px;
    border-left: ${props => props.$border && "1px solid #eceae6"};
    border-right: ${props => props.$border && "1px solid #eceae6"};
    padding: 0 35px;
  }
`;

export const SearchContainer = styled.div`
  display: none;
  @media only screen and (min-width: 1250px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
    height: 100%;
    align-items: center;
    padding: 0 35px;
    border-left: 1px solid #eceae6;
    border-right: 1px solid #eceae6;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-content: center;
  height: 100%;
  
  @media only screen and (min-width: 992px) {
    border-right: 1px solid #eceae6;
    padding: 0 80px;
  }
  @media only screen and (min-width: 1250px) {
    border-right: none;
  }
`;
