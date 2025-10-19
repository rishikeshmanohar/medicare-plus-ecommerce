// components/ProductCard.js
import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, addToCart, showCategory = false }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 flex items-center justify-center text-6xl">
        {product.image}
      </div>
      <div className="p-4">
        {product.prescription && (
          <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded mb-2">
            Prescription Required
          </span>
        )}
        <h3 className="font-bold text-lg mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        {showCategory && (
          <p className="text-xs text-gray-500 mb-3">{product.category}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center space-x-1"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;