import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Sample news data
const newsData = [
  {
    title: "Valor & Rise Kohyang High Schools Get AP Honor Roll",
    description: "Both schools receive AP School Honor Roll recognition for excellence.",
    date: "December 5, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
  {
    title: "Bright Star Grad Earns Triple Degrees",
    description: "Elias Cruz earns a high school diploma and two associate degrees in one week.",
    date: "June 18, 2024",
    imageUrl: "images/section6/Degree.jpg",
    link: "#",
  },
  {
    title: "Student Earns Triple Degrees, Featured in La Opinión",
    description: "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
    date: "June 12, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
  {
    title: "Bright Star Grad Earns Triple Degrees",
    description: "Elias Cruz earns a high school diploma and two associate degrees in one week.",
    date: "June 18, 2024",
    imageUrl: "images/section6/Degree.jpg",
    link: "#",
  },
  {
    title: "Student Earns Triple Degrees, Featured in La Opinión",
    description: "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
    date: "June 12, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
  {
    title: "Bright Star Grad Earns Triple Degrees",
    description: "Elias Cruz earns a high school diploma and two associate degrees in one week.",
    date: "June 18, 2024",
    imageUrl: "images/section6/Degree.jpg",
    link: "#",
  },
  {
    title: "Student Earns Triple Degrees, Featured in La Opinión",
    description: "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
    date: "June 12, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
  {
    title: "Bright Star Grad Earns Triple Degrees",
    description: "Elias Cruz earns a high school diploma and two associate degrees in one week.",
    date: "June 18, 2024",
    imageUrl: "images/section6/Degree.jpg",
    link: "#",
  },
  {
    title: "Student Earns Triple Degrees, Featured in La Opinión",
    description: "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
    date: "June 12, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
  {
    title: "Bright Star Grad Earns Triple Degrees",
    description: "Elias Cruz earns a high school diploma and two associate degrees in one week.",
    date: "June 18, 2024",
    imageUrl: "images/section6/Degree.jpg",
    link: "#",
  },
  {
    title: "Student Earns Triple Degrees, Featured in La Opinión",
    description: "Elias Cruz earns a diploma and two associate degrees, gaining media attention.",
    date: "June 12, 2024",
    imageUrl: "images/section6/honer.jpg",
    link: "#",
  },
];

// Custom arrow components 
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-opacity-80 transition-all z-20"
      onClick={onClick}
    >
      <FaArrowLeft size={24} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -right-14 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-opacity-80 transition-all z-20"
      onClick={onClick}
    >
      <FaArrowRight size={24} />
    </button>
  );
};
const Section6 = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 4000,  
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <section className="py-10 px-16 text-blue-600">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
        Latest News
      </h2>

      <div ref={ref} className={`relative transition-opacity duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <Slider {...settings}>
          {newsData.map((news, index) => (
            <div key={index} className="p-4">
              <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                {/* Image Block with Hover Effect */}
                <div className="relative group w-full h-48 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-800">{news.title}</h3>
                  <p className="mt-2 text-sm">{news.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{news.date}</p>
                  <a
                    href={news.link}
                    className="inline-block mt-4 px-4 py-2 text-blue-600 font-bold border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Section6;
