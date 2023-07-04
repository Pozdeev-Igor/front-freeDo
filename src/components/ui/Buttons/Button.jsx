
import React from 'react'
import styles from './button.module.scss'



const Button  = ({
	children,
  variant = 'light-blue',
	size='md',
	onClick,
	...rest
}) => {
	return (
		<button {...rest} onClick = {onClick} className={`${styles.button} ${variant === 'yellow' ? styles.yellow : variant === 'blue' ?  styles.blue : "" } ${size === 'sm' ?  styles.small : ""  }`}>
			{children}
		</button>
	)
}

export default Button
