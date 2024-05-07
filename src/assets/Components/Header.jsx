import React from 'react'
import logo from './../Images/logo.png'
import avatar from './../Images/avatar.jpg'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';


  function Header() {
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
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] obj-cover' />
        {menu.map((item)=>(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
        </div>
        <img src={avatar} className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header