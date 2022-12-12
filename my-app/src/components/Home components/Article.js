import React from "react";

import Icon from "./Icon";
import classes from "../../css/article.module.css";
const Article = ({ id, header, description, icon }) => {
  return (
    <article key={id} className={classes["article"]}>
      <div className={classes["article-contents"]}>
        <Icon icon={icon}></Icon>
        <div className={classes["article-text"]}>
          <h3 className={classes["subheader"]}>{header}</h3>
          <p className={classes["description"]}>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Article;
