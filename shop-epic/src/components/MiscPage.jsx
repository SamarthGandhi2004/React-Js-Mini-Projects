import React from 'react'

const MiscPage = (title) => {
  return (
     <div className="container mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-slate-500 mt-4">This is a static page placeholder for {title}.</p>
    </div>
  )
}

export default MiscPage