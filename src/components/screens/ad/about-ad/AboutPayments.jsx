import React from 'react'

import method_1 from "#assets/images/ad/payments/icon_amex.svg";
import method_2 from "#assets/images/ad/payments/icon_JCB.svg";
import method_3 from "#assets/images/ad/payments/icon_mastercard.svg";
import method_4 from "#assets/images/ad/payments/icon_swift.svg";
import method_5 from "#assets/images/ad/payments/icon_Visa.svg";

import styles from "./about-ad.module.scss";
const AboutPayments = () => {
  return (
    <div className={styles.payment}>
        <div className={styles.text}>payment methods</div>
        <div className={styles.methods}>
          <img src={method_1} alt="amex" />
          <img src={method_2} alt="JCB" />
          <img src={method_3} alt="mastercard" />
          <img src={method_5} alt="visa" />
          <img src={method_4} alt="swift" />
        </div>
      </div>
  )
}

export default AboutPayments