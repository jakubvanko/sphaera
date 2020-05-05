import React from "react";

import { TextLabeledContainer, TextLabel } from "./TextType.styled";

export const TextLabeled = ({ label, ...props }) => (
  <TextLabeledContainer>
    <TextLabel>{label}</TextLabel>
    <span {...props} />
  </TextLabeledContainer>
);
