import React, { useContext } from 'react'
import { contextCounter } from './Context'


const Counters = () => {
    const context=useContext(contextCounter);
  return (
    <>
     <h2>Count: {context.count}</h2>
      <button onClick={()=>{context.setCount(context.count+1)}}>+</button>
      <button onClick={()=>{context.setCount(context.count-1)}} >-</button>
      </>
  )
}

export default Counters