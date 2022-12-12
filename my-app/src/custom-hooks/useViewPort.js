import React from "react";
import { useState, useEffect } from "react";
const useViewPort = () => {
  const [width, setWidth] = React.useState(window.innerHeight);
  useEffect(() => {
    const checkWindowSize = () => setWidth(window.innerHeight);
    window.addEventListener("resize", checkWindowSize);
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);
  return width;
};

export default useViewPort;
