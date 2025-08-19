import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Avatar } from './ui/avatar'
import { Input } from './ui/input'

import { Button } from './ui/button'
import { Badge } from './ui/badge'

const Header = () => {
  return (
     <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <Avatar>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold">SE</div>
          </Avatar>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight">ShopEpic</h1>
            <p className="text-xs text-slate-500">UI-only prototype</p>
          </div>
        </Link>

        <div className="flex-1">
          <Input placeholder="Search products..." type="search"/>
        </div>

        <nav className="flex items-center gap-3">
          <NavLink to="/" end className={({isActive}) => isActive ? 'text-sm font-semibold' : 'text-sm text-slate-600'}>Home</NavLink>
          <NavLink to="/collections" className={({isActive}) => isActive ? 'text-sm font-semibold' : 'text-sm text-slate-600'}>Collections</NavLink>
          <NavLink to="/deals" className={({isActive}) => isActive ? 'text-sm font-semibold' : 'text-sm text-slate-600'}>Deals</NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? 'text-sm font-semibold' : 'text-sm text-slate-600'}>Cart</NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? 'text-sm font-semibold' : 'text-sm text-slate-600'}>Profile</NavLink>
        </nav>

        <div className="ml-3 flex items-center gap-2">
          <Badge>New</Badge>
          <Button variant="ghost">Sign in</Button>
        </div>
      </div>
    </header>
  )
}

export default Header