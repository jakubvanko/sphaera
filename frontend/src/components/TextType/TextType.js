import React from "react";

import { TextLabel, TextLabeledContainer } from "./TextType.styled";

export const TextLabeled = ({ label, ...props }) => (
  <TextLabeledContainer>
    <TextLabel>{label}</TextLabel>
    <span {...props} />
  </TextLabeledContainer>
);
