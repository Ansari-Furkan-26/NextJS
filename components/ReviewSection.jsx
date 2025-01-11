// components/ReviewSection.js
import React from "react";

const reviews = [
  {
    name: "Vijay Yedavalli",
    time: "3 months ago",
    rating: 5,
    text: "Had hired Hafla for my kid’s 6th birthday party. They did an amazing job. The team of Hassan who provided decorations, children...",
  },
  {
    name: "Syriac John",
    time: "5 months ago",
    rating: 5,
    text: "These guys were incredibly helpful. We had a last-minute need for furniture for our exhibition, and once we placed the order with them...",
  },
  {
    name: "Irina Okhapkina",
    time: "3 months ago",
    rating: 5,
    text: "Had a very good experience working with Sneha. At every step of the event planning, including the time of the event itself when...",
  },
  {
    name: "Isaac Dwomoh",
    time: "5 months ago",
    rating: 5,
    text: "Great Service at Hafla, they helped me host a wedding in Palm Jumeirah from head to toes. The team had a lot of patience with me...",
  },
];

const ReviewSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.54L.244 6.91l6.562-.954L10 0l2.194 5.956 6.562.954-4.854 4.64 1.122 6.54L10 15z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">Hafla</p>
          <p className="text-xl font-semibold text-yellow-500">4.3 ★</p>
          <p className="text-sm text-gray-500">364 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
