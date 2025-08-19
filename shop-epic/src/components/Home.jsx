import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/Slices/ProductSlice'
import { fetchCategories } from './redux/Slices/CategoriesSlice'

const Home = () => {
  const selector=useSelector((state)=>state.products);
  const categories=useSelector((state)=>state.categories.list);
  // console.log(selector.items);
  console.log(categories);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  },[dispatch])

    const PRODUCTS = [
  { id: '1', title: 'Aurora Running Shoes', price: 89, rating: 4.6, img: 'https://images.unsplash.com/photo-1528701800489-476b5b9a6b7d?auto=format&fit=crop&w=800&q=60' },
  { id: '2', title: 'Nomad Leather Backpack', price: 149, rating: 4.8, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60' },
  { id: '3', title: 'Nimbus Wireless Headphones', price: 199, rating: 4.4, img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=60' },
  { id: '4', title: 'Lume Smart Lamp', price: 59, rating: 4.2, img: 'https://images.unsplash.com/photo-1482909203005-78b8a7f9a1f5?auto=format&fit=crop&w=800&q=60' },
  { id: '5', title: 'Terra Ceramic Mug (Set of 2)', price: 24, rating: 4.7, img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60' }
]
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold leading-tight">Designed for discovery. Built for conversion.</h2>
          <p className="mt-3 text-slate-600">This is a navigation-only UI mock — no cart logic or data loading is implemented. Replace with your state management as needed.</p>

          <div className="mt-6 flex gap-3">
            <Link to="/collections"><Button>Explore collections</Button></Link>
            <Link to="/deals"><Button variant="ghost">View deals</Button></Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-2xl shadow">Free shipping over $50</div>
            <div className="bg-white p-4 rounded-2xl shadow">30-day returns</div>
            <div className="bg-white p-4 rounded-2xl shadow">24/7 support</div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=60" alt="hero" className="w-full h-52 object-cover" />
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Featured products</h3>
          <div className="text-sm text-slate-500">View all</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selector.items.slice(0,9).map(p => (
            <Card key={p.id} className="overflow-hidden rounded-2xl">
              <Link to={`/product/${p.id}`}>
                <img src={p.thumbnail} alt={p.title} className="w-full h-48 object-cover" />
              </Link>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{p.title}</h4>
                    <div className="text-sm text-slate-500">${p.price}</div>
                  </div>
                  <div className="text-sm text-slate-500">{p.rating} ⭐</div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Link to={`/product/${p.id}`}><Button>View</Button></Link>
                <Button variant="outline">Wishlist</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-lg font-semibold mb-4">Top categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category)=>(
 <Link to="/collections/sports" className="bg-white p-4 rounded-lg shadow text-center">{category.name}</Link>
          ))}
         
      
        </div>
      </section>
    </div>
  )
}

export default Home