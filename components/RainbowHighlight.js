import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[4, 4]}
      iterations={4}
      animationDuration={animationDuration}
      roughness={0} // adjust this value to reduce the roughness
      bowing={0} // adjust this value to reduce the curvature
      color={color}
    >
      {children}
    </RoughNotation >
  );
};
