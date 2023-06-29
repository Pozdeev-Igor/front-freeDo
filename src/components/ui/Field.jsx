
import { forwardRef } from 'react'

const Field = forwardRef(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className='' style={style}>
				<label>
					<span className=''>
						{Icon && <Icon className='' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						className=''
						{...rest}
					/>
				</label>
				{error && <div className=''>{error}</div>}
			</div>
		)
	}
)


export default Field
