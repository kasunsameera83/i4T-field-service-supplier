import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter, faCalendarDays, faEraser } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const stausList = ['ALL','ASSIGNED', 'ACCEPTED','IN-PROGRESS', 'ON-HOLD', 'COMPLETED' ]
const FilterMenu = (props) => {
    const [selected, setSelected] = useState();
    const [selectedStatus, setSelectedStatus] = useState("ALL");
    const [clearButton, setClearButton] = useState(false)
    useEffect(()=> {
        if(selectedStatus !== 'ALL' || selected){
            setClearButton(true)
        }else {
            setClearButton(false)
        }
    },[selected || selectedStatus])

    const clearFileters = ()=> {
        setSelectedStatus('ALL')
        setSelected('')
    }

  return (
    <div className='w-full'>
        <div className='
                absolute
                md:relative
                w-full 
                top-5 
                md:top-0
                z-40 
                bg-bgColor 
                block
                p-3 
                ring-2
                md:ring-0
                ring-bgGreen
                shadow-lg
                md:h-14
                md:flex
                rounded-md'> 
            <div className='w-full grid grid-cols-2 gap-4  md:hidden'>
                <div className='col-span-2 md:flex w-full'>
                    <div className='flex items-center w-full'>
                        <FontAwesomeIcon className='text-lightGray hidden md:block' icon={ faMagnifyingGlass } />  
                        <input 
                            className='ml-2 outline-none text-darkGray hidden md:block' 
                            placeholder='Search' 
                            type="text" 
                        /> 
                        <div className=' text-darkGray md:ml-2 md:flex md:items-center '>
                            <FontAwesomeIcon className='text-bgGreen text-xl mr-2 hidden md:block' icon={ faFilter }/>  
                            <span className='font-bold'>Status :</span>
                            <select 
                                onChange={(e)=> {setSelectedStatus(e.target.value)}}
                                className='outline-none text-darkGray ml-2 pr-4 py-2 text-sm' 
                                value={ selectedStatus }
                                name="">
                                {stausList&& 
                                    stausList.map((item, index) => {
                                        return <option className='text-sm h6' key={ index }>
                                                    <span className='text-sm'>{ item }</span>
                                                </option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className=' md:ml-3 text-darkGray col-span-2   w-full'>
                    <div className='w-full md:flex md:items-center '>
                        <FontAwesomeIcon className='text-bgGreen mr-2 hidden md:block' icon={ faCalendarDays } />
                        <span className='font-bold'>Assigned Date:</span>
                        <DatePicker 
                            className='ml-2'
                            selected={ selected }
                            format="MM/dd/yyyy"
                            onChange={(date) => setSelected(date)}
                        />
                    </div>
                </div>
            </div>
            <div className='w-full hidden md:block'>
                <div className='flex w-full justify-between items-center'>
                    <div className='flex'>
                        <div className='flex items-center '>
                            <FontAwesomeIcon 
                                className='text-lightGray' 
                                icon={ faMagnifyingGlass } />  
                            <input 
                                className='ml-2 w-28 outline-none text-darkGray' 
                                placeholder='Search' 
                                type="text" 
                            /> 
                        </div>
                        <div className=' text-darkGray ml-2 flex items-center '>
                            <FontAwesomeIcon 
                                className='text-bgGreen text-xl mr-2' 
                                icon={ faFilter }/>  
                            <span className='font-bold'>Status :</span>
                            <select 
                                className='outline-none text-darkGray ml-2 mr-2 text-sm' 
                                name="">
                                {stausList&& 
                                    stausList.map((item, index) => {
                                        return <option 
                                                    key={ index }>
                                                    <span className='text-sm'>{ item }</span>
                                                </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className='ml-3 text-darkGray flex items-center'>
                            <FontAwesomeIcon 
                                className='text-bgGreen text-xl mr-2 ' 
                                icon={ faCalendarDays } />
                            <span className='font-bold'>Assigned Date:</span>
                            <DatePicker 
                                className='ml-2'
                                selected={ selected }
                                format="MM/dd/yyyy"
                                onChange={(date) => setSelected(date)}
                            />
                        </div>
                        {clearButton &&
                            <div className=''>
                                <button onClick={ clearFileters } className='bg-darkGray text-bgColor px-2 rounded-md ml-2'>
                                    <FontAwesomeIcon icon={ faEraser } />
                                </button>
                            </div>
                        }
                    </div>
                    <div className='hidden items-center lg:block '>
                        <div className='flex items-center'>
                            <span className='text-darkGray'>
                                Number of tasks:
                            </span>
                            <span 
                                className='text-2xl font-bold ml-3 text-bgGreen'>
                                {props.numberOfTask? props.numberOfTask: 0}
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterMenu
