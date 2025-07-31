import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/DataBase/DataBase'


const Search = ({setName,setEmail,name,email,searchTerm,setSearchTerm}) => {

// const handleInput=async(e)=>{
// setSearchTerm(e.target.value);
// }

const handleAdd=async()=>{
    if(!name&&!email){
return ;
    }else{console.log("name:",name,"email:",email)
try {
    await addDoc(collection(db,"contacts"),{name,email,createdAt: new Date()});
    setEmail("");
    setName("");
} catch (error) {
    console.log(error);
}
    }

}

    return (
        <>
            <div className="container flex items-center mt-5 ">
                <Input type="text" className="" value={searchTerm} placeholder="Search here..." onChange={(e)=>setSearchTerm(e.target.value)}/>


                <div className="btn w-[50%] flex justify-end">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button className=""><div>Add</div></Button>
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
                                            className="col-span-2 h-8"
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxWidth">Email</Label>
                                        <Input
                                            id="email"
                                            className="col-span-2 h-8"
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>

                                </div>
                                <Button  onClick={() => {
                         handleAdd()
                       
                            }}
                                >Add</Button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

        </>
    )
}

export default Search