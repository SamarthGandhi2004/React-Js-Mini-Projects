import React from 'react'
import { Avatar } from './ui/avatar'
import { Button } from './ui/button'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {user}=useSelector((state)=>state.auth);

  return (
      <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <div className="flex items-center gap-4">
            <Avatar>
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">SG</div>
            </Avatar>
            <div>
              <div className="font-semibold">{user.email}</div>
              <div className="text-sm text-slate-500">id:{user.uid}</div>
            </div>
          </div>

          <div className="mt-6">
            <Button variant="ghost">Edit profile</Button>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold">Orders</h3>
          <div className="mt-4 text-slate-500">No orders — UI placeholder.</div>
        </div>
      </div>
    </div>
  )
}

export default Profile