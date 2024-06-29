import React from "react";
import HeaderImage from "../assets/blog-header3.jpg";

export default function Hero() {
  return (
    <div className="mt-5">
      <img
        src={HeaderImage}
        className="rounded-lg border bottom-2"
        height={"200px"}
      />
    </div>
  );
}
