import React from "react";

import Icon from "./Icon";
import classes from "../../css/article.module.css";
const Article = ({ id, header, description, icon }) => {
  return (
    <article key={id} className={classes["article"]}>
      <div className={classes["article-contents"]}>
        <Icon icon={icon}></Icon>
        <h3 className={classes["subheader"]}>{header}</h3>
        <p className={classes["description"]}>{description}</p>
      </div>
    </article>
  );
};

export default Article;
