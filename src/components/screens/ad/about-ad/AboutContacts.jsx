import React from 'react'

import styles from './about-ad.module.scss'

import phone from "#assets/images/ad/icon_phone.svg";
import instagram from "#assets/images/ad/icon_instagram.svg";
import email from "#assets/images/ad/icon_email.svg";
import telegram from "#assets/images/ad/icon_telegram.svg";
import whatsapp from "#assets/images/ad/icon_whatsapp.svg";


const AboutContacts = () => {
  return (
    <div className={styles.contacts}>
            <div className={styles.contact}><img src={phone} alt="phone" />+1 (408) 555-09-41</div>
            <div className={styles.contact}><img src={email} alt="email" />Ivanov@gmail.com</div>
            <div className={styles.contact}><img src={instagram} alt="instagram" />alexIv</div>
            <div className={styles.contact}><img src={whatsapp} alt="whatsapp" />+1 (408) 555-09-41</div>
            <div className={styles.contact}><img src={telegram} alt="telegram" />alexIv</div>

          </div>
  )
}

export default AboutContacts