import React from "react";
import CatalogItem from "./catalog-item/CatalogItem";

const Catalog = ({data}) => {
  

  return (
    <>
      {data.map((item) => {
        return <CatalogItem key={item.date} {...item} />;
      })}
    </>
  );
};

export default Catalog;
