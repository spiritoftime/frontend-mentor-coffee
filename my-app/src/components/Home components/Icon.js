import React from "react";
import DOMPurify from "dompurify";
import { useRef, useLayoutEffect } from "react";
import classes from "../../css/article.module.css";
const Icon = ({ icon }) => {
  const containerRef = useRef();
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.firstElementChild.classList.add(classes["icon"]);
    }
  });

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(icon) }}
    />
  );
};

export default Icon;
