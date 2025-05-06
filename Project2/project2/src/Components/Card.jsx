import React from 'react';

const ProductCard = () => {
  // Sample product data (you can replace with props later)
  const product = {
    title: "Premium Wireless Headphones",
    price: 299.99,
    discountPrice: 249.99,
    description: "Noise-cancelling Bluetooth headphones with premium sound quality",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    reviews: 128
  };

  // Function to render rating stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < fullStars ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
        {halfStar && (
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/> */}
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover"
        src={product.imageUrl}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="mb-2">
          {renderStars(product.rating)}
          <span className="text-gray-600 text-sm ml-2">
            ({product.reviews} reviews)
          </span>
        </div>
        <h3 className="font-bold text-xl mb-2">{product.title}</h3>
        <p className="text-gray-700 text-base mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            {product.discountPrice ? (
              <>
                <span className="text-2xl font-bold text-red-600">
                  ${product.discountPrice}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">
                ${product.price}
              </span>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;