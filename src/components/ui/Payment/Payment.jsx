import React from 'react'
import styles from './payment.module.scss'
import PriceItem from './Price-item/PriceItem'

const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.title}>Expected payment</div>
      <div className={styles.price}>
        <div className={styles.service}>
          <PriceItem price='$800' text='for the service'/>
          <PriceItem price='$15' text='for hour'/>
          <PriceItem price='FREE' text='consultation'/>
        </div>
      </div>
    </div>
  )
}

export default Payment