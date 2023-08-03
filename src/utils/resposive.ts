import React from "react";

export const breakpoint: number[] = [
  480, 640, 768, 932, 1024, 1140, 1280, 1440, 1728, 1920,
];

function getWindowDimensions() {
  let width;
  let height;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return windowDimensions;
};
