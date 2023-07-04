import React from 'react'

import styles from './price-item.module.scss'

const PriceItem = ({price, text}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>{price}</div>
      <div className={styles.text}>{text}</div>

    </div>
  )
}

export default PriceItem