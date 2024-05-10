import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import avatar from './../assets/Images/avatar.jpg'
import topolino from './../assets/Images/Topolino.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { MdAddCircleOutline } from "react-icons/md";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {
    //avatar click
        const [showList, setShowList] = useState(false);
      
        const handleClick = () => {
          setShowList(!showList);
        };
    
//navbar
    const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        <div className='text-white items-center gap-3
        text-[15px] font-semibold cursor-pointer hover:underline
        underline-offset-8 mr-20 '>
            
      <img src={avatar} className=' rounded-full logo ' onClick={handleClick} />
      {showList && (
        <ul className='bg-[#121212] 
        border-[1px] border-gray-700 absolute py-5 px-5'>
          <li><img src={topolino} className=' rounded-full logo'/></li>
          <li className='cursor-pointer hover:underline mb-3 '> Add Profile</li>
          <li className='cursor-pointer hover:underline mb-3'>App Setting</li>
          <li className='cursor-pointer hover:underline mb-3'>Account</li>
          <li className='cursor-pointer hover:underline mb-3'>Help</li>
          <li className='cursor-pointer hover:underline mb-3'>Log Out</li>
        </ul>
      )}
        
    </div>
    </div>
  )
}

export default Header