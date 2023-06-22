import React from "react";
import CatalogItem from "./catalog-item/CatalogItem";
import image from "../../../assets/images/image_card.png";
const Catalog = () => {
  const data = [
    { profession: "Веб-дизайнер, UX/UI дизайнер",
    type: "Услуги, IT, интернет, телеком, создание сайтов",
    name: "Александр Иванов",
    date: "23.05, 23:15",
    views: 30,
    image: image,},
    { profession: "Веб-дизайнер, UX/UI дизайнер",
    type: "Услуги, IT, интернет, телеком, создание сайтов",
    name: "Александр Иванов",
    date: "23.05, 23:15",
    views: 30,
    image: image,},
    { profession: "Веб-дизайнер, UX/UI дизайнер",
    type: "Услуги, IT, интернет, телеком, создание сайтов",
    name: "Александр Иванов",
    date: "23.05, 23:15",
    views: 30,
    image: image,}
  ]
  return (
    <>
      {data.map((item) => {
        return <CatalogItem key={item.date} {...item} />;
      })}
    </>
  );
};

export default Catalog;
