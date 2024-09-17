import React from 'react'
import Usernav from './Usernav'
import UserHero from './UserHero'
const Envelope = () => {
  return (
    <div className='ml-3 shadow-2xl bg-slate-300/10 flex flex-col justify-around items-center p-2 h-[97%] w-[97%] rounded-3xl'>
      <Usernav />
      <UserHero />
      
    </div>
  )
}

export default Envelope