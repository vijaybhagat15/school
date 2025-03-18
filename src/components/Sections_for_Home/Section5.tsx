import { motion,} from "framer-motion";
import { useInView, } from "react-intersection-observer";

const values = [
  {
    title: "Integridad",
    description: "means we need to be the best versions of ourselves",
    icon: "🎖️",
    bgColor: "bg-blue-500",
  },
  {
    title: "Ubuntu",
    description: "means our humanity is shared and we value kindness",
    icon: "🤲",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Kohyang",
    description: "means hometown and encourages us to build meaningful connections",
    icon: "🏡",
    bgColor: "bg-red-400",
  },
  {
    title: "Growth",
    description: "means having a mindset that allows us to achieve excellence",
    icon: "🌱",
    bgColor: "bg-blue-400",
  },
];

const Section4 = () => {
  const { ref, inView: isInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section ref={ref} className="relative py-6 text-blue-600">
      {/* Background SVG */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/path-to-svg.svg')" }}
      ></div>

      <div className="relative text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Values
        </motion.h2>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="w-64 p-6 text-center shadow-lg rounded-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`mx-auto w-16 h-16 flex items-center justify-center text-3xl rounded-full ${value.bgColor}`}
              >
                {value.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-blue-900">
                {value.title}
              </h3>
              <p className="mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;