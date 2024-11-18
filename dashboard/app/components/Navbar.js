import React from 'react'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'

const Navbar = () => {
  return (
    <>
    <div className='h-20 bg-primary px-10 w-full flex justify-between items-center border-b border-secondary'>
        <input placeholder='Search...' className='rounded-md py-2 px-3 outline-secondary outline-1 w-[300px] border border-secondary'/>
        <Avatar sx={{ bgcolor:deepOrange[500] }}>V</Avatar>
    </div>
    </>
  )
}

export default Navbar