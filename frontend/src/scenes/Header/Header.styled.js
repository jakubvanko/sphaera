import styled from "styled-components";

export const Container = styled.header`
    background-color: #23282D;
    width: 100vw;
    max-width: 100%;
    min-height: 60px;
    display: flex;
    padding: 0 50px;
    justify-content: space-between;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    
    @media only screen and (min-width: 992px) {
        align-items: center;
        justify-content: space-around;
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
    background-color: inherit;
    width: ${props => props.$mobileActive ? "200px" : 0};
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    white-space: nowrap;
    
    @media only screen and (min-width: 992px) {
        position: static;
        flex-direction: row;
        width: auto;
        height: auto;
        align-items: center;
        justify-content: center;
    }
`;

export const LinkContainer = styled.li`
    padding: 10px 20px;
    border-bottom: 1px solid rgb(54, 54, 54);
    
    @media only screen and (min-width: 992px) {
        border-bottom: none;
        display: ${props => props.$display && props.$display};
    }
`;

export const CloseButton = styled.button`
    color: white;
    font-weight: 800;
    font-size: 17px;
    background: #77bdbf;
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
    display: ${props => props.$display && props.$display};
    border-bottom: transparent 2px solid;
    
    :hover {
      color: #77bdbf;
      border-bottom: #77bdbf 2px solid;
    }
`;
