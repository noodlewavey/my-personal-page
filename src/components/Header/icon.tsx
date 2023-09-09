import React from "react";
import Image from "next/image";
import image from "../../tumblr_luda3yYxzm1qzt4vjo1_500_o.gif";

export const IconDown = () => (
  <div>
    {/* Render the image */}
    <Image src={image} alt="Description of the image" />
  </div>
);
