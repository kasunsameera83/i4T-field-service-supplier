import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faCalendarDays, faFile } from '@fortawesome/free-solid-svg-icons'

const SideMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState(1)
    const handleActiveButton = (data) =>{
        if(data) {
            setSelectedMenu(data)
        }
    }
    return (
        <div 
            className=' 
            bg-bgColor 
            shadow-lg 
            rounded-lg 
            p-3
            overflow-hidden
            h-[calc(100vh-90px)]'
        >
            <button 
                onClick={() => handleActiveButton(1)}
                className={selectedMenu===1? 
                'w-full h-10 bg-bgGreen rounded-full text-left px-3 text-bgColor text-md font-bold': 
                'w-full h-10 bg-bgColor rounded-full text-left px-3 text-bgGreen text-md font-bold' }>
                <FontAwesomeIcon className='mr-3' icon={ faListCheck } />
                Task
            </button>
            <button 
                onClick={() =>(handleActiveButton(2))}
                className={selectedMenu===2? 
                'w-full h-10 bg-bgGreen rounded-full text-left px-3 text-bgColor text-md font-bold': 
                'w-full h-10 bg-bgColor rounded-full text-left px-3 text-bgGreen text-md font-bold' }>
                <FontAwesomeIcon className='mr-3' icon={ faCalendarDays } />
                Calendar
            </button>
            <button 
                onClick={() =>(handleActiveButton(3))}
                className={selectedMenu===3? 
                'w-full h-10 bg-bgGreen rounded-full text-left px-3 text-bgColor text-md font-bold': 
                'w-full h-10 bg-bgColor rounded-full text-left px-3 text-bgGreen text-md font-bold' }>
                <FontAwesomeIcon className='mr-3' icon={ faFile } />
                Reports
            </button>
        </div>
    )
}

export default SideMenu
