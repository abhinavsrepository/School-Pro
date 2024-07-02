import Image from 'next/image'
import React from 'react'

function SideNav() {
  return (
    <div>
      <Image src={'/logo.svg'} alt='logo' width={100} height={100}/>
    </div>
  )
}

export default SideNav