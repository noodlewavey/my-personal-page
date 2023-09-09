import React from "react";
import Image from "next/dist/client/image";

const CircularImage = () => {
  const myface = "/mememe.jpeg";

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image src={myface} alt="A pic of me" width="100px" height="100px" />
    </div>
  );
};

export default CircularImage;
