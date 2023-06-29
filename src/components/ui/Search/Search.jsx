import React from 'react'
import styles from './search.module.scss'

const Search = () => {

  const data = ['Фильтры','1', '2', '3']

	
  return (
    <div className={styles.search}>
      <input  className={styles.input} type="text" placeholder='поиск' />
      <select
				value='Фильтры'
				onChange={(e) => {}}
				className={styles.select}
			>
				{data.map(key => {
					return (
						<option
							key={key}
							value={key}
						>
							{key}
						</option>
					)
				})}
			</select>
    </div>
  )
}

export default Search