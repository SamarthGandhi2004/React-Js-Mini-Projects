
import './App.css'
import Cart from './Cart'
import Item from './Item'

function App() {

  return (
   <>
   <Item name="laptop" price="100000"/>
    <Item name="phone" price="140000"/>
     <Item name="computer" price="43000"/>
     <Cart/>
   </>
  )
}

export default App
