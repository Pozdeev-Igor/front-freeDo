
import React from 'react'
import styles from './button.module.scss'



const Button  = ({
	children,
  variant = 'blue',
	size='md',
	...rest
}) => {
	return (
		<button {...rest} className={`${styles.button} ${variant === 'yellow' ? styles.yellow : styles.blue } ${size === 'sm' ? "" : styles.small }`}>
			{children}
		</button>
	)
}

export default Button
