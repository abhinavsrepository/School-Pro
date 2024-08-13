import Image from 'next/image'
import React from 'react'
import { HomeIcon, FileClockIcon } from 'lucide-react'
function SideNav() {

  const MenuList=[
    {
      name:"Home",
      icon:"Home",
      path:"/dashboard"
    },
    {
      name:"History",
      icon:"FileClock",
      path:"/dashboard/history"
    },
    {
      name:"Billing",
      icon:"WalletCards",
      path:"/dashboard/billing"
    },
    {
      name:"Setting",
      icon:"Settings",
      path:"/dashboard/setting"
    },
  ]
  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center '>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100}/>
      </div>
      <div>
        
        {MenuList.map((menu,index)=>(
          <div key={index}>
          <menu.icon/>
          <h2>{menu.name}</h2>
          </div>
        ))}

      </div>
    </div>
  )
}

export default SideNav