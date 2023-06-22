import React from 'react'
import style from './header.module.css'
import Button from '../../Buttons/Button'
import Logo from '../../../../assets/images/Logo.svg'

const Header = () => {
  return (
    <header
			className= {style.header}
		>
		<div className={style.logo}>
    <img src={Logo} alt="Logo" />
    </div>


			<div className={style.menu}>
				<Button>создать объявление 🧑🏼‍💻</Button>
				<Button>мои объявления 📢</Button>
				<Button variant='yellow'>...</Button>
			</div>
		</header>
  )
}

export default Header