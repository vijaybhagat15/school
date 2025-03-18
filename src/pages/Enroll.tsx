
const enrollOptions = [
  {
    title: "Enroll with Us!",
    description:
      "Admissions open for Nursery to Class 12. Apply now to join our top-rated CBSE/ICSE schools across India.",
    image: "images/enroll/Enroll.avif",
  },
  {
    title: "Application & Important Dates",
    description:
      "Check the admission schedule, application deadlines, and entrance exam dates for the upcoming academic session.",
    image: "images/enroll/Dates.avif",
  },
  {
    title: "Events Calendar",
    description:
      "Join our Open House sessions, interact with faculty, and explore our school events.",
    image: "images/enroll/Events.avif",
  },
];

const Enroll = () => {
  return (
    <div className="bg-gray-100 py-10 text-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {enrollOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">
                  {option.title}
                </h3>
                <p className=" mt-2">{option.description}</p>
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

export default Enroll;
