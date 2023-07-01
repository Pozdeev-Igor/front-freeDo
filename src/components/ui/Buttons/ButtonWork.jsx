
import React from 'react'
import styles from './button.module.scss'



const ButtonWork  = ({
	children,
  active = false,
	setStatus,
	...rest
}) => {

	const handleSubmit = () => {
		
    setStatus(prev => !prev)
  }


	return (
		<button {...rest} onClick={handleSubmit} className={`${styles.buttonWork} ${active && styles.active }`}>
			{children}
		</button>
	)
}

export default ButtonWork
