import React from "react";

import { G, Text } from "./AreaSelection.styled";

const AreaSelection = ({
  layout,
  disabled = {},
  viewbox,
  onAreaSelected,
  onAreaOver,
  onAreaOut,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} width={"100%"}>
    {layout.map(
      (
        {
          name,
          path,
          textTransform,
          fill = "#AADE87",
          color,
          selectable = true,
        },
        index
      ) => (
        <G
          key={name + index}
          onClick={() =>
            selectable &&
            !disabled[name] &&
            onAreaSelected &&
            onAreaSelected(name, fill)
          }
          onMouseOver={() =>
            selectable &&
            !disabled[name] &&
            onAreaOver &&
            onAreaOver(name, fill)
          }
          onMouseOut={() =>
            selectable && !disabled[name] && onAreaOut && onAreaOut(name, fill)
          }
          $selectable={selectable && !disabled[name]}
          $disabled={disabled[name]}
        >
          <path
            d={path}
            transform="translate(-16.7 -4.1)"
            fill={fill}
            stroke={"black"}
          />
          <Text transform={textTransform} fill={color || "black"}>
            {name}
          </Text>
        </G>
      )
    )}
  </svg>
);

export default AreaSelection;
