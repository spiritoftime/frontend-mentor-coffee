import React from "react";
import classes from "../../css/collection.module.css";

import GranEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import Planalto from "../../assets/home/desktop/image-planalto.png";
import Piccollo from "../../assets/home/desktop/image-piccollo.png";
import Danche from "../../assets/home/desktop/image-danche.png";
import Product from "./Product";
const products = [
  {
    src: GranEspresso,
    key: "product-0",
    alt: "intense cocoa and black pepper Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    header: "Gran Espresso",
  },
  {
    src: Planalto,
    key: "product-1",
    alt: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    header: "Planalto",
  },
  {
    src: Piccollo,
    key: "product-2",
    alt: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    header: "Piccollo",
  },
  {
    src: Danche,
    key: "product-3",
    alt: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    header: "Danche",
  },
];
const Collection = () => {
  return (
    <section className={classes["collection-section"]}>
      <h2 className={classes["subheader"]}>our collection</h2>
      <div className={classes["products"]}>
        {products.map((product) => {
          return <Product {...product} />;
        })}
      </div>
    </section>
  );
};

export default Collection;
