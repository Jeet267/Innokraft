import React from 'react';

const reviewsData = [
  {
    id: 1,
    name: "Alice Johnson",
    picture: "https://cdn.pixabay.com/photo/2022/11/21/15/47/business-7607426_1280.jpg",
    review: "This product is amazing! Highly recommend it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bob Smith",
    picture: "https://img.freepik.com/free-photo/man-with-reporting-folder-pointing-someone-left_144627-50721.jpg?t=st=1733159201~exp=1733162801~hmac=d68e7821780e412081719bc735f960e648a8c05a8d125471a1472bd6b0685978&w=2000",
    review: "Good value for the price. Satisfied with my purchase.",
    rating: 4,
  },
  {
    id: 3,
    name: "Cathy Brown",
    picture: "https://img.freepik.com/premium-photo/laptop-portrait-man-studio-with-research-creative-software-with-project-development-happy-technology-male-graphic-designer-working-multimedia-art-computer-by-gray-background_590464-450543.jpg?w=2000",
    review: "Average quality, but it gets the job done.",
    rating: 3,
  },
  {
    id: 4,
    name: "David Lee",
    picture: "https://www.shutterstock.com/image-photo/smiling-busy-young-latin-business-260nw-2392837517.jpg",
    review: "Not what I expected. Quality could be better.",
    rating: 2,
  },
];

const Review = () => {
  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow p-6 max-w-xs mx-auto text-center"
          >

            <img
              src={review.picture}
              alt={`${review.name}'s profile`}
              className="w-28 h-28 rounded-full mx-auto mb-4"  
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 mb-4">{review.review}</p>
            

            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={star <= review.rating ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-500"  
                >
                  {/* <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    // d="M12 17.27l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03L12 17.27z"
                  /> */}
                </svg>
              ))}
            </div>


            <p className="font-semibold">Rating: {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;

