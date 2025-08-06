import React from 'react'
import { useCart } from './Context/CartContext'

const Cart = () => {
  const items=useCart();
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