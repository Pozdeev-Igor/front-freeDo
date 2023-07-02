import React from "react";
import AboutContacts from "./AboutContacts";
import photo from "#assets/images/ad/photo.png";
import styles from "./about-ad.module.scss";
import AboutPayments from "./AboutPayments";
const AboutAd = () => {
  return (
    <div className={styles.about}>
      <div className={styles.photo}>
        <img src={photo} alt="photo" />
      </div>
      <div className={styles.name}>Alex Ivanov</div>
      <AboutContacts />
      <AboutPayments />
    </div>
  );
};

export default AboutAd;
