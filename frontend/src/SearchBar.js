import React from 'react'

export default function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
        SearchBar
        <div className='searchInputs'>
            <input type="text"></input>
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'>

        </div>
    </div>
  )
}
