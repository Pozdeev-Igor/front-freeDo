import React from 'react'
import style from './layout.module.css'
import Header from './header/Header'

const Layout = ({ children }) => {
  return (
    <div>
			<Header />
			
				<main className={style.container}>{children}</main>
			
		</div>
  )
}

export default Layout