import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    text: "JPTEKS transformed our business with their innovative solutions. Highly recommended!",
    author: "John Smith",
    role: "CEO"
  },
  {
    text: "Outstanding service and exceptional results. A true technology partner.",
    author: "Sarah Johnson",
    role: "CTO"
  },
  {
    text: "The team's expertise and dedication made our project a huge success.",
    author: "Michael Brown",
    role: "Director"
  }
];

const AutoSlideTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-[300px]">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 px-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <MessageSquare className="h-8 w-8 text-yellow-600 mb-4" />
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">- {testimonial.author}, {testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-yellow-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlideTestimonials;