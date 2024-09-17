import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Add= () => {
    const [formData, setFormData] = useState({
      username: '',
      id: '',
      name: '',
      email: '',
    });
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8080/addUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('User added successfully!');
        } else {
          alert('Failed to add user');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error adding user');
      }
    };
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="bg-black text-white">+ Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Add your new profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">Username</Label>
                <Input id="username" className="col-span-3" value={formData.username} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="id" className="text-right">Id-num</Label>
                <Input id="id" className="col-span-3" value={formData.id} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" className="col-span-3" value={formData.name} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">E-mail</Label>
                <Input id="email" className="col-span-3" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  
export default Add