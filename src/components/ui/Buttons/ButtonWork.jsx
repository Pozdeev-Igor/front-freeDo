
import React from 'react'
import styles from './button.module.css'



const ButtonWork  = ({
	children,
  active = false,
	...rest
}) => {
	return (
		<button {...rest} className={`${styles.buttonWork} ${active && styles.active }`}>
			{children}
		</button>
	)
}

export default ButtonWork
