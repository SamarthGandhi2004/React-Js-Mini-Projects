import React, { useContext } from 'react'
import { contextCart } from './Context/CartContext'

const Cart = () => {
  const items=useContext(contextCart);
  const total=items.items.reduce((a,b)=>a+Number(b.price),0);
  console.log(items)
  return (<>
    <div>Cart</div>
{
  
  items && items.items.map((item)=>(
<li>
{item.name}--------{item.price}
</li>
  ))

}

TOTAL:{total};



</>
  )
}

export default Cart