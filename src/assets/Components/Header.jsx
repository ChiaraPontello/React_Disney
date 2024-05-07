import React from 'react'
import logo from './../Images/logo.png'
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
    <div>
        <img src={logo} className='w-[80px] md:w-[115px] obj-cover' />
        {menu.map((item)=>(
          <HeaderItem name={item.name} Icon={item.icon}/>
        ))}
    </div>
  )
}

export default Header