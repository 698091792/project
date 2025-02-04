import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import D from '../assets/D.jpg';
import img2 from '../assets/img4.jpeg';
import be from '../assets/be.jpeg';
import n from '../assets/n.jpeg';
import ru from '../assets/ru.jpeg';


const teamMembers = [
  {
    name: "Pola Waffo",
    role: "CEO",
    image: img2,
    portfolio: "https://polawaffo.com" // Add the actual portfolio link
  },
  {
    name: "Yebga Ruben",
    role: "CTO",
    image: ru,
    portfolio: "https://yebgaruben.dev"
  },
  {
    name: "Awono Bilogue",
    role: "Lead Developer",
    image: D,
    portfolio: "https://awono.dev"
  },
  {
    name: "Ngounouo Simo",
    role: "Design Lead",
    image: n,
    portfolio: "https://ngounouosimo.design"
  },
  {
    name: "Bilal Ahmadou",
    role: "Business Development Manager",
    image: be,
    portfolio: "https://bilalahmadou.com"
  }
];

const AutoSlideTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {teamMembers.map((_, index) => (
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

export default AutoSlideTeam;

