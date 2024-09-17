import React from 'react'
import Add from './Add'

const Usernav = () => {
  return (
    <div className='p-2 h-[15%] w-[80%]  text-black mx-auto flex justify-between'>
    <div className='flex flex-col justify-around'>
        <p className='text-5xl'>Users</p>
        <p>Manage your Users</p>
    </div>
    <div className='flex flex-col justify-around'>
    <button>Toggle</button>
    <Add />
    </div>
   
    </div>
  )
}

export default Usernav