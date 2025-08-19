import { useParams } from "react-router-dom"
import { Button } from "./ui/button"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { fetchProductById } from "./redux/Slices/ProductSlice";
import { addToCart } from "./redux/Slices/CartSlice";

function ProductPage(){
 const { id } = useParams()
  const dispatch=useDispatch();

  useEffect(()=>{
dispatch(fetchProductById(id))
  },[dispatch])

  const {productDetails}=useSelector((state)=>state.products);
  console.log(productDetails);

    const PRODUCTS = [
  { id: '1', title: 'Aurora Running Shoes', price: 89, rating: 4.6, img: 'https://images.unsplash.com/photo-1528701800489-476b5b9a6b7d?auto=format&fit=crop&w=800&q=60' },
  { id: '2', title: 'Nomad Leather Backpack', price: 149, rating: 4.8, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60' },
  { id: '3', title: 'Nimbus Wireless Headphones', price: 199, rating: 4.4, img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=60' },
  { id: '4', title: 'Lume Smart Lamp', price: 59, rating: 4.2, img: 'https://images.unsplash.com/photo-1482909203005-78b8a7f9a1f5?auto=format&fit=crop&w=800&q=60' },
  { id: '5', title: 'Terra Ceramic Mug (Set of 2)', price: 24, rating: 4.7, img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60' }
]
  // Use react-router's useParams to get the id; we left real logic out on purpose.
 
  // const product = PRODUCTS.find(p => p.id === id)
  return (
    <div className="container mx-auto px-4 py-10">
      {productDetails ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow">
            <img src={productDetails.thumbnail} alt={productDetails.title} className="w-full h-96 object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{productDetails.title}</h1>
            <div className="text-slate-600 mt-2">Rating: {productDetails.rating} ⭐</div>
            <div className="text-3xl font-extrabold mt-4">${productDetails.price}</div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline">Wishlist</Button>
              <Button variant="ghost">Share</Button>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700" onClick={()=>dispatch(addToCart(productDetails))}>
                Add to Cart
              </button>
            </div>

            <div className="mt-8 text-slate-600">
              <h4 className="font-medium">Description</h4>
              <p className="mt-2">{productDetails.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-slate-500">Product not found.</div>
      )}
    </div>
  )
}

export default ProductPage