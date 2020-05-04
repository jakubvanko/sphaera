import React, { useState } from "react";

import { Container } from "./FlipCard.styled";

const FlipCard = ({ children, ...props }) => {
  const [isFlipped, setFlipped] = useState(false);
  if (children.length < 2) {
    throw new Error("FlipCard needs 2 children to function properly.");
  }

  return (
    <Container
      {...props}
      $flipped={isFlipped}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div>{children}</div>
    </Container>
  );
};

export default FlipCard;
