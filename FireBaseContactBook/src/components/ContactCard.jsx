import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/DataBase/DataBase'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ContactCard = ({ contact }) => {

  const[name,setName]=useState(contact.name);
  const[email,setEmail]=useState(contact.email);


  const handleRemove = async (contactId) => {
    try {
      await deleteDoc(doc(db, 'contacts', contactId));
    } catch (error) {
      console.log(error);
    }
  }
  const getContact=async(id)=>{
   
const contact=doc(db,'contacts',id);
const contactSnap=await getDoc(contact);
if(contactSnap.exists()){
  return {
    id:contactSnap.id,
    ...contactSnap.data()
  }
}
  }

async function handleEdit(id){
try {
  await updateDoc(doc(db,'contacts',id),{
    name:name,
    email,email,
  })
} catch (error) {
  console.log(error);
}
} 

  // const handleOldInfo=(contactId)=>{
  //     const contactFound=getContact(contactId);
  //     setOldInfo({...oldInfo,{contactFound}});
  //     console.log(oldInfo);
  // }


  return (
    <div key={contact.id} className='card mt-6 h-[4.5rem] hover:bg-zinc-900 border-white border-2 rounded-3xl flex items-center justify-between p-1'>
      <div><Avatar className="h-[3.5rem] w-[3.5rem]" >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar></div>

      <div className="contactInfo ">
        <h1 className='flex flex-col'>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
        </h1>
      </div>

      <div className="btns flex justify-between min-w-[170px] p-2">


        <Popover>
          <PopoverTrigger asChild>
            <Button className="dark:bg-amber-400 dark:hover:bg-gray-700 dark:text-white"
              variant="default" >Edit</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">New Contact</h4>
                <p className="text-muted-foreground text-sm">
                  Fill Detail here to fit New Contact
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    className="col-span-2 h-8"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Email</Label>
                  <Input
                    id="email"
                    value={email}
                    className="col-span-2 h-8"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

              </div>
              <Button onClick={() => {
                handleEdit(contact.id)

              }}
              >Update</Button>
            </div>
          </PopoverContent>
        </Popover>


        <Button className="dark:hover:bg-red-500 dark:hover:text-white" onClick={() => { handleRemove(contact.id) }}>Remove</Button>
      </div>

    </div>
  )
}

export default ContactCard