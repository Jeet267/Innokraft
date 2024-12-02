import React from 'react';
import img1 from "../pics1.jpg"; 
import img2 from "../pics22.jpg"; 
import img3 from "../pics33.jpg"; 

const OurProduct = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[
          {
            src: img1,
            title: 'Samasti Hair Oil ‐ Natural hair oil for hair growth (100ML)',
            price: '₹399',
            rating: 4,
          },
          {
            src: img2,
            title: 'Abhyanjana Haircare Kit – Best hair care kit for Hair Growth',
            price: '₹1299',
            rating: 5,
          },
          {
            src: img3,
            title: 'Ukti – Natural Hair Scrub (100 g)',
            price: '₹499',
            rating: 3,
          },
          {
            src: img1,
            title: 'Samasti Hair Oil – 200ML for Hair Growth',
            price: '₹749',
            rating: 4,
          },
        ].map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
          >

            <img
              src={product.src}
              alt={product.title}
              className="rounded-t-lg w-full h-64 object-cover"
            />
            <div className="p-4">

              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              

              <p className="text-lg font-bold text-teal-700 mb-2">{product.price}</p>
              
              <p className="text-gray-600 mb-4">Natural, nourishing, and made with love.</p>
              

              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={star <= product.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03L12 17.27z"
                    />
                  </svg>
                ))}
              </div>


              <button className="w-full px-4 py-2 text-teal-700 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
