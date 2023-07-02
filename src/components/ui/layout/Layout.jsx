import React from 'react'
import style from './layout.module.scss'
import Header from './header/Header'

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
			<Header />
			
				<main className={style.main} >{children}</main>
			
		</div>
  )
}

export default Layout