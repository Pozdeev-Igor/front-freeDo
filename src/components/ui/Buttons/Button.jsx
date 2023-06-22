
import React from 'react'
import styles from './button.module.css'



const Button  = ({
	children,
  variant = 'blue',
	size='md',
	...rest
}) => {
	return (
		<button {...rest} className={`${styles.button} ${variant === 'yellow' ? styles.yellow : styles.blue }`}>
			{children}
		</button>
	)
}

export default Button
