
import React from 'react'



const Heading = ({
	className, children
}) => {
	return (
		<h1 className={`   ${className}`} >
      {children}   
    </h1>
	)
}

export default Heading
