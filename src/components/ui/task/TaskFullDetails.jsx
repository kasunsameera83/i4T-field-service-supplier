import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faLocationDot, faPhone, faEnvelope, faDownload, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons'
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import gmap from '../../../assets/map/gMap.png'
import DatePicker from "react-datepicker";


const TaskFullDetails = (props) => {
    const [rating, setRating] = useState(5)
    const [startTime, setStartTime]= useState(new Date())
    const [endTime, setEndTime]= useState(new Date())
  return (
        <div className='absolute w-full h-full z-50'>
            <div className='w-full h-full bg-black opacity-80 '></div>
            <div className='absolute bg-bgColor w-full h-full'>
                <div>
                    <div 
                        className='
                        w-full 
                        h-[60px]
                        bg-bgGreen 
                        flex 
                        items-center 
                        justify-between
                        px-3 
                        rounded-md'
                        >
                        <span className='text-xl text-bgColor font-bold'>
                            Task Card -
                            <span className='ml-2'>{ props.taskData.taskNo }</span>
                        </span>
                        <button onClick={() => {props.closeTaskCard()}}>
                            <FontAwesomeIcon 
                                className='text-bgColor text-2xl' 
                                icon={ faCircleXmark } />
                        </button>
                    </div>
                </div>
                <div className=' grid grid-cols-12 h-full w-full gap-3 p-[15px]'>
                    <div className='h-full w-full col-span-12 md:col-span-8 '>
                        <div className='w-full h-[calc(100vh-180px)] overflow-hidden overflow-y-scroll'>
                            <div className='w-full flex mb-0 md:mb-2'>
                                <img className='h-28 mr-2' src={ props.taskData.clientProfilePic } alt="client" />
                                <div className='w-full '>
                                    <div className='flex justify-between'>
                                        <span className='text-2xl text-darkGray font-bold'>
                                            { props.taskData.clinetName }
                                        </span>
                                        <div className='hidden md:block'>
                                            <ReactStars
                                                count={ 5 }
                                                size={ 24 }
                                                value={ props.taskData.rating }
                                                edit={ false }
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='text-lg mr-2 text-bgGreen' icon={ faLocationDot }/>
                                        <span className='text-base md:text-xl text-darkGray'>
                                            { props.taskData.location }
                                        </span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='text-lg mr-2 text-bgGreen' icon={ faPhone }/>
                                        <span className='text-base md:text-xl text-darkGray'>
                                            { props.taskData.contactNo }
                                        </span>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='text-lg mr-2 text-bgGreen' icon={ faEnvelope }/>
                                        <span className='text-base md:text-xl text-darkGray'>
                                            { props.taskData.email }
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden'>
                                <ReactStars
                                    count={ 5 }
                                    size={ 24 }
                                    value={ props.taskData.rating }
                                    edit={ false }
                                    activeColor="#ffd700"
                                />
                            </div>

                            <div className=''>
                                <div className='w-full flex  mt-5 '>
                                    <div className='w-full'>
                                        <div className={`mb-3 w-full rounded-md p-2 bg-${  props.taskData.statusColour }`}>
                                            <span className={`text-base md:text-xl text-bgColor p-2 `}>
                                                Task status: { props.taskData.status }
                                            </span>
                                        </div>
                                        <div className='w-full min-h-[100px] bg-slate-100 p-2 text-base md:text-xl'>
                                            <p>{ props.taskData.description }</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full mb-2 mt-5'>
                                    <div className='w-full'>
                                        <div className='flex mb-2'>
                                            <span className='text-base md:text-xl text-darkGray '>Task Start:</span> 
                                            <DatePicker 
                                                selected={ startTime }
                                                className='md:ml-4 ml-2 text-bgGreen'
                                                format="MM/dd/yyyy"
                                                showTimeSelect
                                                disabled={ true }
                                                dateFormat="Pp"
                                                onChange={(date) => setStartTime(date)}
                                            />
                                        </div>
                                        <div className='flex mb-2'>
                                            <span className='text-base md:text-xl text-darkGray '>Task End:</span> 
                                            <DatePicker 
                                                className='md:ml-6 ml-3 text-bgGreen'
                                                selected={ endTime }
                                                disabled={ true }
                                                format="MM/dd/yyyy"
                                                showTimeSelect
                                                dateFormat="Pp"
                                                showTime={true}
                                                onChange={(date) => setEndTime(date)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full mb-2 mt-5 '>
                                    <div className='w-full'>
                                        <span className='text-base md:text-xl text-darkGray '>Attachments</span>
                                        <div className='w-full h-14 bg-darkGray p-3 mt-2 flex rounded-md '>
                                            {
                                                props.taskData.attachment && props.taskData.attachment.length>0 &&
                                                props.taskData.attachment.map((attachment) =>{
                                                    return <div className='text-md text-bgColor flex mr-5 items-center'>
                                                        <span>{ attachment }</span>
                                                            <button className='ml-2'>
                                                                <FontAwesomeIcon icon={ faDownload } />
                                                            </button>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='flex mt-2 text-darkGray text-base md:text-xl'>
                                        <span className='mr-2' >Distance: </span>
                                        <span className='font-bold'>{ props.taskData.distance } </span>
                                    </div>
                                    <div className='mt-2 w-full overflow-hidden'>
                                        <img className='bg-cover' src={ gmap } alt="" />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div> 
                            <div>
                                <div className='w-full md:flex mb-2 mt-5 items-center text-base md:text-xl'>
                                    <span className='mr-2 text-darkGray' >Note: </span>
                                    <div className='w-full bg-lightGray p-2 rounded-xl'>
                                        <input className='w-[80%] bg-lightGray outline-none' type="text" name="" id="" />
                                        <button className='bg-bgGreen w-[19%] rounded-md text-bgColor ml-1'>Add</button>
                                    </div>
                                </div>
                                <div className='w-full h-[100px] max-h-[200px] bg-lightGray mb-2 mt-5 rounded-md p-2'>
                                    {
                                        props.taskData.note && props.taskData.note.length >0 &&
                                        props.taskData.note.map((note, index)=> {
                                            return<div key={ index } className=' bg-darkGray text-bgColor p-2 rounded-lg'>
                                                <p className='text-base md:text-xl'>{ note.note }</p>
                                                <div>
                                                    <FontAwesomeIcon className='mr-2 text-bgGreen' icon={ faCalendarDays } />
                                                    <span className='text-sm'>{props.taskData.date}</span>
                                                    <FontAwesomeIcon className='mr-2 ml-4 text-bgGreen' icon={ faClock } />
                                                    <span className='text-sm'>{props.taskData.time}</span>
                                                </div>
                                            </div>
                                        })
                                    }
                                    <span className='mr-2' ></span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='h-full w-full col-span-12 hidden md:block  md:col-span-4'>
                        <div className='w-full h-[calc(100vh-180px)] overflow-hidden overflow-y-scroll'>
                            <div 
                                className='
                                bg-darkGray 
                                flex 
                                justify-between 
                                items-center 
                                h-[50px] px-2 
                                rounded-md 
                                text-lg 
                                text-bgColor'
                                >
                                <span>Chat with client</span>
                                <span>{ props.taskData.online? 'Online' : 'Offline' }</span>
                            </div>
                            <div 
                                className='
                                bg-slate-100 
                                w-full 
                                py-2 
                                h-[calc(100vh-300px)] 
                                overflow-hidden overflow-y-scroll'
                                >
                                {
                                    props.taskData.chatHistory && props.taskData.chatHistory.length > 0 && 
                                    props.taskData.chatHistory.map((history)=> {
                                    return <div className='w-full p-2 flex '> 
                                            {
                                                history.client ?  
                                                    <div className='flexn w-full justify-start'> 
                                                        <img 
                                                            className='h-10 rounded-full mr-2' 
                                                            src={ props.taskData.clientProfilePic } alt="" />
                                                        <div className='p-1 bg-orange-50 text-base md:text-lg'>
                                                            <p>{ history.comment }</p>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className='flex w-full justify-end'> 
                                                        <div className='p-1 bg-emerald-50 text-base md:text-lg'>
                                                            <p>{ history.comment }</p>
                                                        </div>
                                                        <img 
                                                            className='h-10 rounded-full ml-2' 
                                                            src={ props.userData.profilePic } alt="" />
                                                    </div>
                                            }
                                        </div>
                                    })
                                }     
                            </div>
                            <div className='w-full flex mt-3 px-1'>
                                <div 
                                    className='
                                    w-full 
                                    h-[40px] 
                                    flex 
                                    justify-between 
                                    pl-2 ring-4 
                                    ring-bgGreen 
                                    rounded-md 
                                    overflow-hidden'>
                                    <input className='h-full w-40 outline-none' type="text" name="" id="" />
                                    <button className='h-full ml-2 bg-bgGreen px-3 text-bgColor rounded-md'>
                                        send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default TaskFullDetails
