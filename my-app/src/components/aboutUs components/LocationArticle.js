import React from "react";
import classes from "../../css/locationarticle.module.css";
import Icon from "../Home components/Icon";
const LocationArticle = ({
  header,
  address,
  state,
  postalCode,
  number,
  svg,
}) => {
  return (
    <article className={classes["location-article"]}>
      <div className={classes["icon"]}>{<Icon icon={svg} />}</div>
      <h2 className={classes["subheader"]}>{header}</h2>
      <div className={classes["details"]}>
        <p className={classes["detail"]}>{address}</p>
        <p className={classes["detail"]}>{state}</p>
        <p className={classes["detail"]}>{postalCode}</p>
        <p className={classes["detail"]}>{number}</p>
      </div>
    </article>
  );
};

export default LocationArticle;
