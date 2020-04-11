import React from "react";
import styled from "styled-components";
import Loader from "react-spinners/PulseLoader";

const ButtonBase = styled.button`
  border: none;
  outline: none;
  width: 100%;
  user-select: none;
  cursor: pointer;
  padding: 15px 15px;
  border-radius: 2px;
  font-size: 1rem;
`;

export const ButtonPrimary = styled(ButtonBase)`
  background-color: var(--color-gray-1);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  :disabled {
    opacity: 0.5;
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  background-color: transparent;
  color: black;
  border: black solid 2px;
  text-transform: capitalize;
  font-weight: 600;
`;

export const ButtonPrimaryLoader = ({isLoading = false, children, ...props}) => (
    <ButtonPrimary disabled={isLoading} {...props}>
        {isLoading ? <Loader size={"7px"} color={"white"} loading={isLoading}/> : children}
    </ButtonPrimary>
);
