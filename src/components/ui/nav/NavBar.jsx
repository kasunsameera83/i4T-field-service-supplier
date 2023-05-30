import React from 'react'
import companyLogo from '../../../assets/logos/i4T Business new.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortDown, faBell } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <div className='w-screen h-[64px] shadow-lg py-2 px-3  bg-bgColor'>
            <div className='flex items-center justify-between h-full w-full'>
                <div className='h-full w-full flex items-center'>
                    <img src={ companyLogo } alt="" className='h-[80%] '/>
                </div>
                <div 
                    className='
                        h-full 
                        flex 
                        items-center 
                        justify-end
                        float-right 
                        w-[350px] 
                        max-w-[450px]'
                        >
                    <div 
                        className='
                            cursor-pointer 
                            relative
                            mr-2
                            after:left-5 
                            after:top-5 
                            md:after:top-6
                            md:after:left-6
                            after:rounded-full 
                            after:absolute 
                            after:bg-notification 
                            after:w-[8px] 
                            after:h-[8px]
                            md:after:w-[10px]
                            md:after:h-[10px]'
                            
                            >
                        <FontAwesomeIcon 
                            className='text-lg md:text-2xl p-2 mr-2 text-darkGray '  
                            icon={ faBell } />
                    </div>
                    <img 
                        className="rounded-full h-[45px] w-[45px] mr-2 hidden md:block border-2 border-darkGray" 
                        src="https://preview.cruip.com/mosaic/images/user-64-01.jpg" 
                        alt="User" 
                    />
                    <p className='text-base hidden md:block text-bgGreen'>Anna Frozen</p>
                    <FontAwesomeIcon 
                        icon={ faSortDown } 
                        className="text-gray-600 text-lg mx-0 ml-2  hidden md:block" 
                        />
                </div>
                {/* Mobile Menu Button */}
                <div className='lg:hidden block ml-0 md:ml-3'>
                    <FontAwesomeIcon 
                        icon={ faBars } 
                        className="text-bgGreen text-lg" 
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar
