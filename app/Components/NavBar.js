import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import AddNav from './AddNav'
function NavBar() {
  return (
    <>
      <div className='hidden  h-[100vh] bg-slate-200 w-[30%] md:w-[20%] fixed left-0 top-0 sm:flex flex-col justify-between p-5'>
         <div className='flex flex-col justify-between'>
          <p className='p-2'>User Management</p>
          <div className=''>
            <p className=' hover:bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-opacity-20 p-3'>Home</p>
            <p className=' hover:bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-opacity-20 p-3'>Dash Board</p>
          <AddNav />
          </div>
         </div>
         <div className='flex gap-[10px] items-center'>
         <Avatar>
                <AvatarImage src="https://raw.githubusercontent.com/UserPFP/img/main/Avatars/1/1114869512769126441.gif" alt="@shadcn" />
                <AvatarFallback>Pfp</AvatarFallback>
              </Avatar>
              <p>Admin</p>
         </div>
      </div>
    </>
  )
}

export default NavBar