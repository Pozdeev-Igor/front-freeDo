import React from "react";
import Button from "../../Buttons/Button";
import styles from './catalog-item.module.css'
import { AiFillEye } from 'react-icons/ai';

const CatalogItem = ({profession, type, name, date, views, image}) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.profession}>{profession}</div>
        <div className={styles.type}>{type}</div>
        <div className={styles.personal}>
          <div className={styles.name}>{name}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.views}>{views}</div>
          <AiFillEye />
          <Button>скопировать ссылку</Button>
        </div>
        
      </div>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};

export default CatalogItem;
