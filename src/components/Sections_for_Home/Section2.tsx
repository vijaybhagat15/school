import { motion } from "framer-motion";
import { useInView, } from "react-intersection-observer";
const Section2 = () => {
  const features = [
    { title: "Talented Teachers", image: "images/TalentedTeachers.jpg" },
    { title: "Dedicated Counselors", image: "images/DedicatedCounselors.jpg" },
    { title: "Higher Education Access & Support", image: "images/HigherEducation.jpg" },
  ];
   const { ref, inView: isInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="text-center py-3 px-4">
      <h2 className="text-3xl font-bold text-blue-900">Your Future is Bright!</h2>
      <p className="text-lg text-blue-600 max-w-2xl mx-auto mt-3">
      NovaStar’s schools offer strong academics, inclusive support, and rich life opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        {features.map((feature, index) => {
          return (
            <motion.div
              ref={ref}
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
            >
              <motion.img
                src={feature.image}
                alt={feature.title}
                className="w-full h-80 object-cover transition-transform duration-300"
              />
              <motion.div
                className="absolute bottom-4 left-0 right-0 flex items-center justify-center"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-white font-bold text-lg bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                  {feature.title}
                </h3>
              </motion.div>
            </motion.div>

          );
        })}
      </div>
    </section>
  );
};

export default Section2;
