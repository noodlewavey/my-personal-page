import React from "react";
import Image from "next/dist/client/image";
import image from "./mememe.jpeg";

const CircularImage = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image src={image} alt="A pic of me" />
    </div>
  );
};

export default CircularImage;
