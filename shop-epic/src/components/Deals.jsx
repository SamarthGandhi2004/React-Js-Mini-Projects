import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Deals = () => {
  const { items } = useSelector((state) => state.products);

  // Filter products with discount > 12%
  const deals = items.filter((item) => item.discountPercentage > 12);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {deals.map((product) => {
        const oldPrice = product.price;
        const discount = product.discountPercentage;
        const newPrice = Math.round(oldPrice - (oldPrice * discount) / 100);

        return (
          <div
            key={product.id}
            className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover"
              />
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {discount}% OFF
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {product.title}
              </h2>

              {/* Prices */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">${newPrice}</span>
                <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
              </div>

              {/* Button */}
              <Link to={`/product/${product.id}`}><button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
                Grab Deal
              </button></Link> 
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Deals;
