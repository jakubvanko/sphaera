import React from "react";
import styled from "styled-components";
import Loader from "react-spinners/PulseLoader";

const StyledButton = styled.button`
  border: none;
  background-color: rgb(8, 12, 17);
  color: ${props => props.active ? "transparent" : "white"};
  cursor: pointer;
  outline: none;
  padding: 15px 0;
  font-weight: 600;
  border-radius: 2px;
  width: 100%;
  user-select: none;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :disabled {
    cursor: wait;
  }
`;

export const Button = ({active = false, children, ...props}) => (
    <StyledButton {...props} active={active} disabled={active}>
        <Loader size={"7px"} color={"white"} loading={active}/>
        {!active && children}
    </StyledButton>
);
