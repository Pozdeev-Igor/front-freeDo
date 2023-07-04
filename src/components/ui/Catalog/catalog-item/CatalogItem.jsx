import React from "react";
import Button from "#ui/Buttons/Button";
import styles from "./catalog-item.module.scss";
import { AiFillEye } from "react-icons/ai";
import LinkImage from "#assets/images/icon_link.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "#utils/Icon";
import Carousels from "../Carousel/Carousel";
import { Link } from "react-router-dom";

const CatalogItem = ({
  id,
  profession,
  type,
  name,
  date,
  views,
  image,
  text,
}) => {
  return (
    <div className={styles.card}>
     
        <div className={styles.info}>
        <Link to={`/ad/${id}`}>
          <div className={styles.profession}>{profession}</div>
          <div className={styles.type}>{type}</div>
          <div className={styles.personal}>
            <div className={styles.name}>{name}</div>
            <div className={styles.date}>{date}</div>
            <div className={styles.views}>{views}</div>

            <AiFillEye />
            <Button size="sm">
              <Icon />
            </Button>
          </div>
          <div className={styles.text}>{text}</div>
          </Link>
        </div>
      
      <Carousels image={image} />
      {/* <img className={styles.image} src={image} alt="" /> */}
    </div>
  );
};
export default CatalogItem;
