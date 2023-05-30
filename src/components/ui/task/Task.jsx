import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCalendarDays, faClock, faEye, faPaperclip } 
from '@fortawesome/free-solid-svg-icons'
import TaskFullDetails from './TaskFullDetails'

const stausList = ['ASSIGNED', 'ACCEPTED','IN-PROGRESS', 'ON-HOLD', 'COMPLETED' ]
const Task = (props) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [statusColor, setStatusColor] = useState('');
    const [fullTaskDetails, setFullTaskDetails] = useState('');
  

    useEffect(()=> {
        setSelectedOption((props.task.status).toUpperCase())
    },[props.task])

    useEffect(()=> {
        setStatusColor((props.task.statusColour))
    },[props.task])

    const handleSTatusChange = (e) => {
        setSelectedOption((e.target.value).toUpperCase())
    }

    const setSelectedTask = (data) => {
        props.handleSelectedTask(data)
    }


  return (
    <div className='w-full mb-4 relative'>
        
        <div className='bg-bgOnHold'></div>
        <div className='bg-bgInProgress'></div>
        <div className='
            relative 
            w-full 
            bg-taskBgColor
            rounded-lg
            shadow-lg
            lg:hidden
            overflow-hidden'
            > 
            <div  className= {`w-full h-10  absolute top-[-30px] bg-${ props.task.statusColour }`} ></div>
            <div className='w-full p-3 mt-1'>
                <div className='w-full flex items-center justify-between text-darkGray mb-1'>
                    <p className='font-bold text-base md:text-lg'>
                       {`Task No: ${ props.task.taskNo }  `} 
                       <span className={`text-${ props.task.statusColour } py-1 px-2 text-base md:text-lg rounded-full`}>
                            {`${ props.task.status }`}
                       </span>
                    </p> 
                    <span 
                        className={`text-xs md:text-lg mb-1 
                        ${ props.task.online ? 'text-bgGreen' : 'text-notification' }`}>
                        { props.task.online ? 'Online' : 'Offline' }
                    </span>
                </div>
                <div className='w-full h-16 flex items-center mb-2 '>
                    <img 
                        className='h-[100%] mr-3 rounded-md shadow-md' 
                        src={props.task.clientProfilePic} alt="client" 
                        />
                    <div className='w-full'>
                        <span className='text-base md:text-2xl font-bold text-bgGreen'>{ props.task.clinetName }</span>
                       <div className='flex w-full gap-1 items-center'>
                            <FontAwesomeIcon className='text-bgGreen md:text-lg' icon={ faLocationDot } />
                            <p className={`text-xs text-darkGray md:text-lg`}>  { props.task.location } </p>
                       </div>

                    </div>
                </div>
                <div className=' w-full min-h-[100px]'>
                    <p className='font-bold text-darkGray text-base md:text-lg'>Task description</p>
                    <div 
                        className='w-full min-h-[70px] max-h-[150px] overflow-y-auto bg-lightGray p-3 rounded-md'>
                        <p className=' text-darkGray text-base md:text-lg'>{ props.task.description }</p>
                    </div>
                </div>
                <div className='w-full flex items-center'>
                    <FontAwesomeIcon className='mr-2 text-bgGreen' icon={ faCalendarDays } />
                    <span className='text-sm md:text-lg'>{props.task.date}</span>
                    <FontAwesomeIcon className='mr-2 ml-4 text-bgGreen' icon={ faClock } />
                    <span className='text-sm md:text-lg'>{props.task.time}</span>
                </div>
                <div className='mt-2'>
                    <button 
                        onClick={ () => setSelectedTask(props.task)}
                        className='p-2 w-full bg-bgGreen rounded-md text-taskBgColor text-base md:text-xl'> 
                        <FontAwesomeIcon className='mr-2' icon={ faEye } /> 
                            more details
                    </button>
                </div>
            </div>
        </div>
        <div className='w-full hidden lg:block h-20'>
            <div className='w-full h-20 relative shadow-lg overflow-hidden rounded-lg'>
                <div className={`w-7 h-full bg-${ statusColor } z-50`}> </div>
                    <div className='absolute w-full h-full p-3'>
                        <div className='flex w-full h-full items-center'>
                            <div className='w-96 h-full items-center flex text-darkGray text-base '>
                                <img 
                                    className='h-[100%] mr-3 rounded-md shadow-lg' 
                                    src={props.task.clientProfilePic} alt="client" 
                                />
                                <div className=''>
                                    <div className='w-full'>
                                        <h3 className='font-bold text-bgGreen'>{ props.task.clinetName }</h3>
                                    </div>
                                    <div>
                                        <span 
                                            className={`text-xs  mb-1 
                                            ${ props.task.online ? 'text-bgGreen' : 'text-notification' }`}>
                                            { props.task.online ? 'Online' : 'Offline' }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-40 px-3 h-full items-center  justify-between flex text-darkGray text-base '>
                                <span>{ props.task.taskNo }</span>
                            </div>
                            <div className='w-[45%]  h-full items-center flex text-darkGray text-base '>
                                <div>
                                    <div>
                                        <span className='text-sm font-bold'>{ props.task.description }</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <FontAwesomeIcon className='mr-2 text-bgGreen' icon={ faCalendarDays } />
                                        <span className='text-sm'>{props.task.date}</span>
                                        <FontAwesomeIcon className='mr-2 ml-4 text-bgGreen' icon={ faClock } />
                                        <span className='text-sm'>{props.task.time}</span>
                                        <FontAwesomeIcon className='mr-2 ml-4 text-bgGreen' icon={ faPaperclip } />
                                        <span className='text-sm'>
                                            { props.task.attachment.length > 0? props.task.attachment.length : 0 }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-40 h-full items-center justify-between flex text-darkGray text-base '>
                                {/* <span className={`text-${ props.task.statusColour } py-1 px-2  rounded-full`}>
                                    {`${ props.task.status }`}
                                </span> */}
                                <select 
                                    className={ `outline-none text-bgColor ml-2 mr-2 px-3 py-2 rounded-full text-sm bg-${ statusColor }` }
                                    value ={ selectedOption }
                                    onChange={(e) => {handleSTatusChange(e)}}
                                    disabled = { selectedOption === 'COMPLETED'? true : null }
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
                            <div className='w-60 h-full items-center justify-between flex text-darkGray text-base '>
                                <span>{ props.task.location }</span>
                            </div>
                            <div className='w-40 items-center justify-between flex text-darkGray text-base '>
                                <button 
                                    onClick={ () => setSelectedTask(props.task)}
                                    className='p-2 w-full bg-bgGreen rounded-md text-taskBgColor'> 
                                    <FontAwesomeIcon className='mr-2' icon={ faEye } /> 
                                        view
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Task
