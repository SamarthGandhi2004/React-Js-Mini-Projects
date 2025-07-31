import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button';
import { CiEdit } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import UserData from './database/UserData';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from './ui/label';
import { Input } from './ui/input';


const DataTable = () => {

const[data,setData]=useState([]);
const[editingUser,setEditingUser]=useState(null);
const[name,setName]=useState("");
const[phone,setPhone]=useState("");
const[email,setEmail]=useState("");
const[id,setId]=useState(0);
const[newContact,setNewContact]=useState({
  name:'',phone:'',email:'',id:''
})
const[isOpen,setIsOpen]=useState(false);

useEffect(()=>{
  setData(UserData);
},[]);


const handleAdd=()=>{
  console.log(newContact);
   if (!newContact.name || !newContact.phone || !newContact.email) return;
  setData([...data,newContact]);
  setIsOpen(false);
  setNewContact({name:"",id:"",email:"",phone:""});
  
}



const handleEdit=(id)=>{

const user=data.find((user)=>user.id==id);
if(!user) return;
setName(user.name);
setEmail(user.email);
setPhone(user.phone);
setId(user.id);
setEditingUser(id)

console.log(user);

}


const handleSave=()=>{
const user=data.find((user)=>user.id==id);
user.name=name;
user.phone=phone;
user.email=email;
user.id=id;
}


const handleRemove=(id)=>{

  const dt=data.filter((user)=>user.id!==id);
  setData(dt);
}


  return (
    <>

<div>
   <Popover
      //  open={editingUser==user.id}
      //  onOpenChange={(open)=>!open}
open={isOpen} onOpenChange={setIsOpen}
       >
      <PopoverTrigger asChild>
          <Button className="bg-amber-700 ">Add</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">

                <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Id</Label>
              <Input
                id="Id"
                
                className="col-span-2 h-8"
                onChange={(e)=>setNewContact({...newContact,id:e.target.value})}
                value={newContact.id}
                
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                
                className="col-span-2 h-8"
                onChange={(e)=>setNewContact({...newContact,name:e.target.value})}
                value={newContact.name}
                
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="phone">Phone No.</Label>
              <Input
                id="phone"
                
                className="col-span-2 h-8"
                 onChange={(e)=>setNewContact({...newContact,phone:e.target.value})}
                 value={newContact.phone}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                
                className="col-span-2 h-8"
                 onChange={(e)=>setNewContact({...newContact,email:e.target.value})}
                 value={newContact.email}
              />
            </div>

             <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            onClick={() => {
                         handleAdd()
                       {!open}
                            }}
                          >
                            Add
                          </Button>
                        </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
</div>

















   <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Index</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Phone No.</TableHead>
      <TableHead>Email</TableHead>
      <TableHead className="text-center bg-zinc-700">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      data.map((user,index)=>(
         <TableRow key={index+1}>
      <TableCell className="font-medium text-left">{index+1}</TableCell>
      <TableCell className="text-left">{user.name}</TableCell>
      <TableCell className="text-left">{user.phone}</TableCell>
      <TableCell className="text-left">{user.email}</TableCell>
      <TableCell className="flex justify-around bg-zinc-700">
        
       <Popover
       open={editingUser==user.id}
       onOpenChange={(open)=>!open&&setEditingUser(null)}

       >
      <PopoverTrigger asChild>
          <Button className="bg-amber-300 " onClick={()=>handleEdit(user.id)}><CiEdit/></Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                
                className="col-span-2 h-8"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="phone">Phone No.</Label>
              <Input
                id="phone"
                
                className="col-span-2 h-8"
                 onChange={(e)=>setPhone(e.target.value)}
                 value={phone}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                
                className="col-span-2 h-8"
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
              />
            </div>

             <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            onClick={() => {
                         handleSave(user.id)
                        
                            }}
                          >
                            Save
                          </Button>
                        </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>

      <Button className="bg-red-700" onClick={()=>handleRemove(user.id)}><CiCircleRemove /></Button>
      </TableCell>
    </TableRow>
      ))
    }
   
    
  </TableBody>
</Table>





    </>
  )
}

export default DataTable;