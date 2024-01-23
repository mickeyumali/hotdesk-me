
"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { BsBoxes, BsPersonVideo3, BsGlobeAmericas, BsChevronRight  } from "react-icons/bs";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { PiPuzzlePieceLight } from "react-icons/pi";
import logo from "../app/img/logo.png"
import company from "../app/img/Company-amico.png"
import elips from "../app/img/Ellipse.png"
import demo from "../app/img/demo.png"
import Image from 'next/image'





export default function Example() {
  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  // forbookingfaqs
  const [open3, setOpen3] = useState(false);
  // forAt Workspace FAQs
  const [open4, setOpen4] = useState(false);
  return (
    <div className='relative'>
    <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-white">
      <header className="absolute inset-x-0 top-0 z-50">
        
        <nav className="flex items-center justify-between border-b-2 border-blue-900 lg:px-8 drop-shadow-md h-20" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex" >
              <Image
                className="h-10 w-auto justify-center align-middle"
                src={logo}
                alt=""
              />
              <span className="not-sr-only text-blue-800 ml-2 mt-1 font-bold text-xl">Desk<span className="text-blue-600	">Flow</span></span>
            </a>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
            <div className="flex gap-4">
              <div>
                <a href="http://" className=" px-10 py-3 text-sm bg-blue-900 text-slate-200 rounded-xl hover:bg-white hover:text-black hover:drop-shadow-lg">Sign In</a>
              </div>
              <div >
                <a href="http://" className="px-10 py-3 text-sm  border	border-blue-900 text-black rounded-xl hover:bg-blue-900 hover:drop-shadow-lg hover:text-white">Sign up</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      


      <div className="h-screen">
        <div className=" h-screen flex items-center justify-between mx-20" >
          <div>
             <h1 className="text-6xl font-semibold	text-blue-900 " >
               Flexible Workspace <br />
               solution,simplified
             </h1>
             <div className="mb-8 mt-5">
                <p className="text-zinc-500 text-sm">Helps in the process of reserving or locating available desks <br />or work spaces in shared office settings, enabling you to work <br /> flexibly without having a dedicated desk. </p>
             </div>
             <div>
                <a href="http://" className=" px-3 py-3 text-sm bg-blue-400 text-slate-200 rounded-xl hover:bg-white hover:text-black hover:drop-shadow-lg">Learn more</a>
             </div>
          </div>
          <div>
            <Image
                  className=" pt-24"
                  src={company}
                  alt=""
                  width={500}
                  height={500}
                />
          </div>
          
        </div>
        
        
      </div>
      
    </div>
    <div className="bg-white h-screen relative">
      <div className= "h-screen relative flex justify-center items-center">
      <Image
        className="absolute top-10 right-40"
        src={elips}
        alt=""
        width={500}
        height={500}
      />
      <div className=" z-10">
        <h1 className="text-5xl	font-semibold	text-blue-900 text-center mb-8">How it works</h1>
        <Image
            className=""
            src={demo}
            alt=""
            width={500}
            height={500}
          />
      </div>
      </div>
      <div className="z-10 w-56 h-36 text-center flex flex-col items-center  px-1 py-1 rounded-md bg-white drop-shadow-md absolute bottom-5 left-56 i">
       <p className="text-blue-900 text-base	">Book a Desk</p>
       <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
       <p className="text-slate-800	 text-xs px-2">Employees can reserve a desk in accordance with their preferred schedule and select the most suitable desk for their needs.  </p>
      </div>
      <div className="z-10 w-56 h-36 text-center flex flex-col items-center  px-1 py-1 rounded-md bg-white drop-shadow-md absolute top-52 right-56 i">
       <p className="text-blue-900 text-base	">Available Desk</p>
       <hr  className=" w-40 mt-3 mb-2 bg-slate-900 "/>
       <p className="text-slate-800	 text-xs mt-3 px-2">Users can reserve their preferred desk by checking which desks are available.  </p>
      </div>
      
      
    </div>
    <div className="bg-white h-screen">
      <div className=" flex flex-row gap-32 justify-center items-center mx-16 py-14  ">
        <div className=" w-48 h-48   flex flex-col justify-center items-center">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsBoxes className='text-slate-800	 text-5xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-3'>Space Optimization</p>
          <p className='text-black text-xs text-center pt-3'>Uses office space more efficiently by letting workers reserve desks as needed.</p>
        </div>
        <div className=" w-48 h-48 flex flex-col justify-center items-center">
          <div className= "bg-sky-100 p-4 rounded-full">
            <MdOutlineEditLocationAlt className='text-slate-800	 text-5xl'/>
          </div>
          <p className='text-slate-800	text-s font-semibold pt-3'>Workspace Map</p>
          <p className='text-black text-xs text-center pt-3'>Displaying up an interactive map so workers can locate and reserve their desk with ease.</p>
        </div>
        <div className=" w-48 h-48 flex flex-col justify-center items-center">
          <div className= "bg-sky-100 p-4 rounded-full">
            <PiPuzzlePieceLight  className='text-slate-800	 text-5xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-1'>Flexibility for<br />Employees</p>
          <p className='text-black text-xs text-center pt-1'>Employees are free to select a workspace that best suits their needs and interests.</p>
        </div>
        
      </div>
      <div className=" flex flex-row gap-32 justify-center items-center mx-16 py-4  ">
        <div className=" w-48 h-48  flex flex-col justify-center items-center">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsPersonVideo3 className='text-slate-800	 text-5xl' />
          </div>
          <p className='text-slate-800	 text-s font-semibold text-center pt-3'>Supports Remote <br />Work</p>
          <p className='text-black text-xs text-center pt-3'>Allows employees to reserve desks when needed, making accommodations for those who work remotely but occasionally visit the office.</p>
        </div>
        <div className=" w-48 h-48 flex flex-col justify-center items-center">
          <div className= "bg-sky-100 p-4 rounded-full">
            <BsGlobeAmericas className='text-slate-800	 text-5xl'  />
          </div>
          <p className='text-slate-800	 text-s font-semibold pt-4'>Environmental <br />Sustainability</p>
          <p className='text-black text-xs text-center pt-3'>By using space and resources more effectively, businesses can lessen their environmental impact.</p>
        </div>
      </div>
    </div>

    {/* fOR FOOTER */}

    <div className='bg-gradient-to-t from-blue-200 via-blue-100 to-white'>
      <div className='flex flex-col gap-8 justify-center items-center pt-9'>
      <h1 className="text-5xl	font-semibold	text-blue-600 text-center mb-8"><span className="text-blue-900 ">Frequently Ask</span> Questions</h1>
        <div className={`bg-white flex items-start shadow-md w-4/6 ${open ? " h-72": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>What is Hotdesking all about?</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen(!open)}>
              <BsChevronRight className={`text-white hover:text-black 	text-xl ${!open ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open ?"hidden": "block"} duration-500`}>
                 <p className='text-slate-800 text-sm'>A tool or piece of software used to schedule and manage flexible workspace in an office setting is called a hot desk booking system. With hot desking, employees can use any desk or workspace that becomes available to them as needed, as opposed to having designated desks. To guarantee they have a place to work in a shared office environment, the booking system enables individuals or groups to reserve desks or work areas for a predetermined amount of time. Usually, these systems have the following features:  Desk Reservation, Checking Availability, User Profiles and Integration. 
                  <br />
                  <br />
                 These systems encourage adaptability, productivity, and teamwork in the workplace by letting workers select their workspace according to their preferences or tasks and making the best use of the office space that is available.</p>
              </div>
          </div>
        </div>
        
        {/*For General faqs*/}
        <div className={`bg-white flex items-start shadow-md w-4/6 ${open2 ? " h-96": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>General FAQs....</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen2(!open2)}>
              <BsChevronRight className={`text-white hover:text-black	text-xl ${!open2 ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open2 ?"hidden": "block"} duration-500 flex flex-col gap-4`}>
                 <p className='text-slate-800 text-base font-medium'>Q: How do I book a co-working space at Hotdesk?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: You can book a co-working space at Hotdesk by using the Hotdesk app. Simply select the location, date, and time that you want to book, and choose from the available co-working spaces.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: What type of co-working spaces are available at Hotdesk?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Hotdesk offers a variety of co-working spaces, including dedicated desks, and flexible hot desks. You can choose the type of co-working space that best fits your needs and budget.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: Can I book a co-working space for a specific date and time?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Yes, you can book a co-working space for a specific date and time. Simply select the date and time you want to book, and choose from the available co-working spaces.</p>
              </div>
          </div>
        </div>

        {/* ForBooking FAQS */}

        <div className={`bg-white flex items-start shadow-md w-4/6 ${open3 ? " h-96": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>Booking FAQs</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen3(!open3)}>
              <BsChevronRight className={`text-white hover:text-black text-xl ${!open3 ?" " : "rotate-90"} duration-300 `}/>
            </div>
              <div className={` mx-5 pt-8 ${!open3 ?"hidden": "block"} duration-500 flex flex-col gap-3`}>
                <p className='text-slate-800 text-sm font-medium'>Q: How do I book a space?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: Bookings can be made either by sending a request to book the space by booking instantly look for workspaces with the Booking icon. A user can book a space either by searching and filtering, or by exploring nearby.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q: What happens once a booking is requested?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: The request is sent to the workspace’s admins to check the availability of the space and confirm the request. Hotdesk’s team ensures that the hosts confirm the requests as soon as they receive them.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q:  I Forgot my username and/or password,what do i do?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: You can reset your password by visiting the home page —&gt; Profile —&gt; Login —&gt; Forgot password.</p>

                 <p className='text-slate-800 text-sm font-medium'>Q: Where can i find my Bookings?</p>
                 <p className='text-slate-800 text-xs font-medium'><span className=' font-medium'>A</span>: The bookings can be accessed from the Dashboard.</p>
              </div>
          </div>
        </div>

         {/* forAt Workspace FAQs */}

        <div className={`bg-white flex items-start shadow-md w-4/6 ${open4 ? " h-72": "h-24"} duration-200 rounded-2xl relative`}>
          <div className=' pt-8'>
            <h1 className='text-slate-800	 text-xl pl-4'>At Workspace FAQs</h1>
            <div className='bg-blue-900	 p-3 absolute right-11 top-7 rounded-full cursor-pointer hover:bg-white hover:text-black hover:drop-shadow-lg' onClick={()=> setOpen4(!open4)}>
              <BsChevronRight className={`text-white hover:text-black	text-xl ${!open4 ?" " : "rotate-90"} duration-300`}/>
            </div>
              <div className={` mx-5 pt-8 ${!open4 ?"hidden": "block"} duration-500 flex flex-col gap-4` }>
                 <p className='text-slate-800 text-base font-medium'>Q: Is there Wi-Fi and printing available at the co-working space?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>: Yes, Wi-Fi and printing are usually available at the co-working spaces listed on Hotdesk. Be sure to check the specific listing for each co-working space to see what technology amenities are available.</p>

                 <p className='text-slate-800 text-base font-medium'>Q: Are there private phone booths or quiet areas available?</p>
                 <p className='text-slate-800 text-sm font-medium'><span className=' font-medium'>A</span>:  Some co-working spaces listed on Hotdesk may have private phone booths or quiet areas available, while others may not. Be sure to check the specific listing for each co-working space to see what options are available.</p>
              </div>
          </div>
        </div>


      </div>
      <br />
      <br />
      <br />
      <br />
    </div>

    {/* Footer */}
    <div className=' absolute bottom-0 w-full'>
      <div className='flex flex-row justify-between items-center px-36 bg-blue-900 h-20 w-full'>
        <p className='text-white text-xs'>Copyright © 2023 Hot-Desking System</p>
        <p className='text-white text-xs'>All Rights Reserved</p>
      </div>
    </div>

    </div>
  )
}
