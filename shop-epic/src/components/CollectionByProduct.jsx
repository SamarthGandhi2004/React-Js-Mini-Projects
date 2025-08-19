import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryBySlug } from "./redux/Slices/CategoriesSlice";
import { addToCart } from "./redux/Slices/CartSlice";

const CollectionByProduct = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryBySlug(slug));
  }, [dispatch, slug]);

  const { categoryProduct = [] } = useSelector((state) => state.categories);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center capitalize">
        {slug} Collection
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categoryProduct.map((item) => (
          <Card
            key={item.id}
            className="rounded-2xl shadow hover:shadow-lg transition"
          >
            <CardContent className="p-4">
              {/* Product Thumbnail */}
              <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
              <p className="mt-2 font-bold text-lg">₹{item.price}</p>

              {/* CTA */}
              <Button className="w-full mt-4" onClick={()=>dispatch(addToCart(item))}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollectionByProduct;
