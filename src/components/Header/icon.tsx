import React from "react";
import Image from "next/image";
import image from "../../tumblr_luda3yYxzm1qzt4vjo1_500_o.gif";

export const IconDown = () => (
  //   When you rotate an element counter-clockwise by 90 degrees:

  // The original "top" of your element is now visually on the "left".
  // The original "right" side of your element is now visually the "top".
  // The original "bottom" is now visually on the "right".
  // The original "left" side of your element is now visually the "bottom".
  <div
    style={{
      transform: "rotate(-90deg)",
      position: "relative",
      left: "18rem", //increasing this shifts to the left..
      top: "-20rem",
      zIndex: "-100",
    }}
  >
    {/* Render the image */}
    <Image src={image} alt="Description of the image" />
  </div>
);
