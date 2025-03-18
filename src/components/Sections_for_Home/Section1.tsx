import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "images/section1/img1.jpg",
    title: "Teach with Us!",
    description: "Shine BRIGHT here! We're hiring outstanding educators for the 24-25 school year. Apply today!",
  },
  {
    image: "images/section1/img2.avif",
    title: "Inspire the Future!",
    description: "Join a community of passionate educators dedicated to making a difference.",
  },
  {
    image: "images/section1/img3.avif",
    title: "Grow with Us!",
    description: "Develop your skills and advance your career in a supportive environment.",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [loaderWidth, setLoaderWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setLoaderWidth(0);
    const loaderInterval = setInterval(() => {
      setLoaderWidth((prev) => (prev < 100 ? prev + 1.67 : 100));
    }, 100);
    return () => clearInterval(loaderInterval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
<AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
    className="absolute inset-0 w-full h-full flex items-center justify-center text-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${slides[index].image})`,
      transition: "background-image 0.8s ease-in-out", // Smooth background transition
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500"></div>
    <div className="relative text-white px-8 md:px-16 text-center drop-shadow-lg">
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide animate-fadeIn">
      {slides[index].title}
    </h1>
    <p className="mt-6 text-xl md:text-2xl font-medium leading-relaxed">
      {slides[index].description}
    </p>
      <button className="mt-8 bg-blue-700 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-md transition-transform transform hover:scale-105">
        Learn More
      </button>
    </div>
  </motion.div>
</AnimatePresence>


      {/* Left Arrow */}
      <button onClick={prevSlide} className="absolute sm:left-4 left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white">
        <FaChevronLeft size={16} />
      </button>
      {/* Right Arrow */}
      <button onClick={nextSlide} className="absolute sm:right-4 right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white">
        <FaChevronRight size={16} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 flex space-x-2 left-1/2 transform -translate-x-1/2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>

      {/* Loader UI */}
      <div className="absolute bottom-0 left-0 w-full bg-black border-t-2 border-gray-800">
        <div className="relative mx-auto h-2 w-full bg-gray-600">
          <div className="absolute h-2 bg-black transition-all" style={{ width: `${loaderWidth}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
