import React from "react";
import Layout from "#ui/layout/Layout";

import Slider from "../../ui/Slider/Slider";
import Payment from "../../ui/Payment/Payment";




import styles from "./ad.module.scss";
import AboutAd from "./about-ad/AboutAd";
import { useParams } from "react-router-dom";


const Ad = () => {

  const param = useParams()

  console.log(param)
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.ad}>
          <Slider />

          <div className={styles.info}>
            <div className={styles.profession}>UX UI Designer | Product Designer | Art Director</div>
            <div className={styles.type}>Services, IT, Internet, telecom, website creation</div>
           <Payment />

            <div className={styles.text}>Designer with more than 10 years of experience: - UX/UI designer in product teams - Fintech - Art directing - Gamedev - 3D - Motion design <br/> I am open to new interesting projects!<br/>I have created a design system on all projects, participated in the creation of a UI kit for ICL-services and Fujitsu companies. I have experience working both in corporations as a department head and in startups as a jack of all trades.<br/>Management experience - a total of about 3 years, up to 4 people.</div>
          </div>
        </div>
        <AboutAd />
      </div>
    </Layout>
  );
};

export default Ad;
