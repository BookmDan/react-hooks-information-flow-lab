import React from 'react'

const Filter = ({categories, selectCategory, onCategoryChange} ) => {
  return (
    <select value={selectCategory} onChange={(e)=> onCategoryChange(e.target.value)}>
      {categories && categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>

    // <div>Filter</div>
  )
}

export default Filter