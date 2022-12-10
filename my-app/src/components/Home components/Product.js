import React from "react";
import classes from "../../css/product.module.css";
const Product = ({ src, id, alt, description, header }) => {
  return (
    <article className={classes["product-article"]}>
      <img alt={alt} className={classes["product-img"]} src={src} />
      <div className={classes["product-text"]}>
        <h3 className={classes["product-name"]}>{header}</h3>
        <p className={classes["product-description"]}>{description}</p>
      </div>
    </article>
  );
};

export default Product;
