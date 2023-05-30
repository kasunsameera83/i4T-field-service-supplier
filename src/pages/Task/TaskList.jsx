import React, { useState, useEffect } from 'react'
import Task from '../../components/ui/task/Task'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faFilter } from '@fortawesome/free-solid-svg-icons'
import taskData from '../../data/taskList.json'
import Filter from '../../components/ui/filter/Filter'
import FilterMenu from '../../components/ui/filter/FilterMenu'
import TaskFullDetails from '../../components/ui/task/TaskFullDetails'

const user = {
    name: "Anna Frozen",
    profilePic: "https://preview.cruip.com/mosaic/images/user-64-01.jpg"
}

const TaskList = () => {
    
    const [taskList, setTaskList] = useState([]);
    const [selectedTask, setselectedTask] = useState("");
    const [showFullTaskDetails, setShowFullTaskDetails] = useState(false);
    const [userData, setUserData] = useState(user)

    useEffect (()=> {
        selectedTask ? setShowFullTaskDetails(true) : setShowFullTaskDetails(false)
    },[selectedTask])

    useEffect (()=> {
        setTaskList(taskData)
    },[])
    
    const handleSelectedTask = (data) => {
        data? setselectedTask(data) : setselectedTask("")
    }

    const closeTaskCard = () => {
        setselectedTask("")
    }

  return (
    <div className='relative'>
        {showFullTaskDetails && 
            // null
            <div className='w-full h-full'>
                <TaskFullDetails userData={ userData } taskData = { selectedTask } closeTaskCard ={ closeTaskCard } />
            </div>
        }
        <div className=' 
            bg-bgColor 
            shadow-lg 
            rounded-lg 
            block
            lg:hidden
            py-3
            overflow-hidden
            h-[calc(100vh-90px)]'
            >
            <div className='
                w-full  
                h-14 
                bg-bgGreen 
                flex 
                items-center 
                p-3 
                shadow-lg 
                justify-between'
                >
                <div>
                    <FontAwesomeIcon 
                        className='text-bgColor text-xl mr-2' 
                        icon={ faListCheck }
                    />
                    <span 
                        className='text-xl text-bgColor font-bold '>
                        Task List
                    </span>
                </div>
                <div className='flex items-center'>
                    <span className='text-bgColor'>
                        Number of tasks:
                    </span>
                    <span 
                        className='text-2xl font-bold ml-3 text-bgColor'>
                        {taskList? taskList.length: 0}
                    </span>
                    
                </div>
            </div>
            <div 
                className='
                w-full  
                h-14 
                flex 
                items-center
                md:hidden
                p-3 
                shadow-lg 
                z-10'
            >
                <Filter />
            </div>
            <div className='w-full h-14 hidden md:block'>
                <FilterMenu   numberOfTask = { taskList.length }  />
            </div>
            <div 
                className='
                w-full 
                h-[calc(100vh-148px)] 
                p-3 
                pb-[64px]
                overflow-y-scroll 
                overflow-hidden'
            >
                <div 
                    className=' lg:h-full w-full'>
                    {
                        taskList && 
                        taskList.map((task, index)=> {
                        return <Task handleSelectedTask= {handleSelectedTask}   task = {task} />
                        })
                    }
                </div>
            </div>
        </div>
        <div className=' 
            hidden
            lg:block
            lg:h-[calc(100vh-90px)]'
            >
            <FilterMenu numberOfTask = { taskList.length } />
            <div 
                className=' 
                bg-bgColor 
                shadow-lg 
                rounded-lg 
                mt-3
                hidden
                lg:block
                overflow-hidden
                lg:h-[calc(100vh-159px)]'
                >
                <div className='w-full h-14 flex shadow-lg p-3'>
                    <div className='w-96 h-full items-center px-3 justify-between flex text-darkGray text-base '>
                        <span>Client</span>
                    </div>
                    <div className='w-40 h-full items-center justify-between flex text-darkGray text-base '>
                        <span>Task No</span>
                    </div>
                    <div className='w-[45%] h-full items-center justify-between flex text-darkGray text-base '>
                        <span>Description</span>
                    </div>
                    <div className='w-40 h-full items-center justify-between flex text-darkGray text-base '>
                        <span>Status</span>
                    </div>
                    <div className='w-60 h-full items-center justify-between flex text-darkGray text-base '>
                        <span>Location</span>
                    </div>
                    <div className='w-40 h-full items-center justify-between flex text-darkGray text-base '>
                        
                    </div>
                </div>
                <div 
                    className='
                    w-full 
                    h-[calc(100vh-148px)] 
                    p-3 
                    overflow-y-scroll 
                    overflow-hidden'
                >
                <div 
                    className=' h-full w-full'>
                    {
                        taskList && 
                        taskList.map((task, index)=> {
                        return <Task handleSelectedTask = { handleSelectedTask } task = {task} />
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TaskList
