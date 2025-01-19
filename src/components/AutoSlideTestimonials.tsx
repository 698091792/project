import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import D from '../assets/D.jpg'; // Correct image import

const AutoSlideTestimonials = () => {
  const { t } = useLanguage(); // Assuming useLanguage provides a `t` function for translations
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: t('text1'),
      author: t('author1'),
      role: t('role1'),
      profilePicture: D, // Directly assign the imported image
    },
    {
      text: t('text2'),
      author: t('author2'),
      role: t('role2'),
      profilePicture: '/path/to/profile2.jpg', // Update with the correct image path
    },
    {
      text: t('text3'),
      author: t('author3'),
      role: t('role3'),
      profilePicture: '/path/to/profile3.jpg', // Update with the correct image path
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative overflow-hidden h-[300px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full">
              <img
                src={testimonial.profilePicture}
                alt={`${testimonial.author}'s profile`}
                className="h-16 w-16 rounded-full object-cover mb-4 mx-auto"
              />
              <p className="text-gray-600 mb-4 text-center">"{testimonial.text}"</p>
              <p className="font-semibold text-center">
                {testimonial.author}, {testimonial.role}
              </p>
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


