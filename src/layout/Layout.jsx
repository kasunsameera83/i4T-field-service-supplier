import React, { Fragment } from 'react'
import NavBar from '../components/ui/nav/NavBar'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/ui/side_menu/SideMenu'

const Layout = () => {
  return (
    <Fragment>
        <div className='w-screen h-screen bg-[#F6F8FF]'>
            <div> 
                <NavBar />
            </div>
            <div className='
                grid 
                grid-cols-12 
                gap-3 
                h-[calc(100vh-90px)]
                p-3'>
                <div className='h-full col-span-2 hidden lg:block'>
                    <SideMenu />
                </div>
                <div className='h-[100%] col-span-12 lg:col-span-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Layout
