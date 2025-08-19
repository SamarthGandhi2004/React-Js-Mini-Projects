import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Collections = () => {
  const [images,setImages]=useState({})
  console.log("hi",images)
  const categories = useSelector((state) => state.categories.list);
  useEffect(()=>{
  const fetchCategoriesImage=async()=>{
    const images={};
  
for (const i of categories){
  const image=await fetch(`https://dummyjson.com/products/category/${i.slug}`)
   const data = await image.json();
  console.log(data.products[0]?.thumbnail);
  images[i.slug]=data.products[0]?.thumbnail||"";
  
}

 setImages(images)
  }
   fetchCategoriesImage();
  },[categories])


  const PRODUCTS = [
    {
      id: "1",
      title: "Aurora Running Shoes",
      price: 89,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1528701800489-476b5b9a6b7d?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "2",
      title: "Nomad Leather Backpack",
      price: 149,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "3",
      title: "Nimbus Wireless Headphones",
      price: 199,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "4",
      title: "Lume Smart Lamp",
      price: 59,
      rating: 4.2,
      img: "https://images.unsplash.com/photo-1482909203005-78b8a7f9a1f5?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "5",
      title: "Terra Ceramic Mug (Set of 2)",
      price: 24,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Collections</h2>
        <div className="text-sm text-slate-500">Filter • Sort</div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((p) => (
              <Card key={p.slug} className="overflow-hidden rounded-2xl">
                <Link to={`/Collections/${p.slug}`}>
                
                  <img
                    src={images[p.slug]}
                    alt="null"
                    className="w-full h-44 object-cover"
                  />
            
                </Link>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{p.name}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="new">
          <div className="text-slate-500">New arrivals UI placeholder</div>
        </TabsContent>
        <TabsContent value="popular">
          <div className="text-slate-500">Popular UI placeholder</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Collections;
