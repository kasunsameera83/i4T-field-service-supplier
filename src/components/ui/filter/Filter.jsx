import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCaretDown, faFilter, faBroom } from '@fortawesome/free-solid-svg-icons'
import FilterMenu from './FilterMenu'

const Filter = () => {
    const [filterMenu, setFilterMenu] = useState(false);
    const handleFilterMenu = () => {
        setFilterMenu(!filterMenu)
    }
  return (
    <div className=' w-full relative'>
        <div className='flex items-center md:hidden justify-between'>
            <div> 
                <FontAwesomeIcon className='text-lightGray' icon={ faMagnifyingGlass } />
                <input className='ml-2 outline-none text-darkGray' placeholder='Search' type="text" />
            </div>
            <div>
                <button onClick={handleFilterMenu}>
                    <FontAwesomeIcon className='text-bgGreen text-xl mr-2' icon={ faFilter }/>
                    <span className='text-base text-darkGray'>Filters</span>
                </button>
            </div>
        </div>
        {
            filterMenu && 
            <div className='relative w-full flex justify-end'>
                <FilterMenu handleFilterMenu={ handleFilterMenu } />
            </div>
        }
    </div>
  )
}

export default Filter
