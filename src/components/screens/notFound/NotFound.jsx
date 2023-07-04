import React from 'react'

import style from './not-found.module.scss'
import Layout from '../../ui/layout/Layout'


import notFound from "#assets/images/not_found.png";
const NotFound = () => {
  return (
   <Layout>
   <div className={style.notFound}>
     <div className={style.container}>
      <img src={notFound} alt="Not found" />
     </div>
     </div>
   </Layout>
  )
}

export default NotFound