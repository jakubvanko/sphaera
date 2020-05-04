import React from "react";
import Loader from "react-spinners/PulseLoader";

import { ButtonPrimary } from "./Button.styled";

export const ButtonPrimaryLoader = ({
  isLoading = false,
  children,
  ...props
}) => (
  <ButtonPrimary disabled={isLoading} {...props}>
    {isLoading ? (
      <Loader size={"7px"} color={"white"} loading={isLoading} />
    ) : (
      children
    )}
  </ButtonPrimary>
);
