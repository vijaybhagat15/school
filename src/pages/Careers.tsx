
const careerOptions = [
  {
    title: "Why Teach at NovaStar Academy?",
    description:
      "Join a passionate team dedicated to providing top-quality education and shaping India's future leaders.",
    image: "images/carrers/Teach.jpg",
  },
  {
    title: "Apply Today!",
    description:
      "We are hiring passionate educators for CBSE/ICSE curriculum across multiple locations in India.",
    image: "images/carrers/Apply.jpg",
  },
  {
    title: "Professional Development",
    description:
      "Get access to training, certifications, and mentorship programs to enhance your teaching career.",
    image: "images/carrers/Development.avif",
  },
];

const Careers = () => {
  return (
    <div className="bg-gray-50 py-10 text-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Join NovaStar Academy's Teaching Community
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {careerOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">
                  {option.title}
                </h3>
                <p className="mt-2">{option.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-red-700">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
