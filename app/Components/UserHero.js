import React, { useEffect, useReducer, useState } from 'react';
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from 'axios';

const userHero= () => {
  const [curdata, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const[reducerValue,forceupdate]=useReducer(x=>x+1,0);
  const itemsPerPage = 5;
  const handle=async (user)=>{
    try {
        const response = await fetch('http://localhost:8080/deleteUser/'+user.id, {
          method: 'DELETE'
        });

        if (response.ok) {
        toast("Successfully Deleted the user "+user.name)
        forceupdate();
        } else {
          toast("Error in deleting the user "+user.name)
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error deleting user');
      }
}
  const links = [
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/5/559426966151757824.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/1/1092083152962469968.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/7/790303634034393169.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/9/965699084600115260.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/8/819191621676695563.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/8/863402791144521738.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/6/670903344180494336.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/7/744231650812231782.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/4/479688142908162059.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/3/368521195940741122.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/1/184405311681986560.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/9/964563933774098462.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/8/859824986432864286.webp",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/4/443545183997657120.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/3/345052005976506378.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/1/1116074488774262835.gif",
    "https://raw.githubusercontent.com/UserPFP/img/main/Avatars/1/1114869512769126441.gif"
];
const fetchData=async ()=>{
  axios.get('http://localhost:8080/users')
  .then(response => {
    setData(response.data);
    console.log(response.data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
  useEffect(() => {
   fetchData();
  }, [reducerValue]);

  const totalPages = Math.ceil(curdata.length *1/ itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const data= curdata.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='h-[80%] w-[80%] bg-slate-200/20 rounded-2xl shadow-lg text-black p-2 mx-auto'>
      <div className='text-black flex justify-between w-[95%] p-2 flex-wrap gap-2'>
            <p className='text-lg'>Users</p>
            <div className='flex'>
            <input className='w-[90%] border-[1px] border-black rounded-md text-sm p-2' placeholder="Who you are looking for?" type="text" />
            <button className='border-y-2 border-r-2 p-1 rounded-sm'>🔍</button>
            </div>
        </div>
        <hr></hr>
        <Table>
      <TableCaption>User Management</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Profile</TableHead>
          <TableHead className="text-justify">Id-Number</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>E-Mail</TableHead>
          <TableHead >UserName</TableHead>
          <TableHead className="text-right">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user,key) => (
          <Dialog>
          <DialogTrigger asChild>
          <TableRow className="text-slate-800 hover:bg-blue-400 cursor-pointer" key={key}>
             <TableCell>
             <Avatar>
                <AvatarImage src={links[(key)+3]}  alt="@shadcn" />
                <AvatarFallback>Pfp</AvatarFallback>
              </Avatar>
              </TableCell>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-right">
            <Button
            className="hover:bg-red-400"
      variant="outline"
      onClick={() =>handle(user)
      }
    >
      Delete
    </Button>
          </TableCell>
          </TableRow>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{user.name}</DialogTitle>
              <DialogDescription>
                <div className='flex gap-2 items-center'>
                <Avatar>
                <AvatarImage src={links[(key)+4]}  alt="@shadcn" />
                <AvatarFallback>Pfp</AvatarFallback>
              </Avatar> 
              {user.username}
                </div>
             <div className='flex flex-col justify-evenly'>
              <p>Name :{user.name}</p>
              <p>Email :{user.email}</p>
              <p>Roll:{user.id}</p>
             </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
          
        ))}
      </TableBody>
    </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(index + 1)}
                style={{ fontWeight: currentPage === index + 1 ? 'bold' : 'normal' }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default userHero;
