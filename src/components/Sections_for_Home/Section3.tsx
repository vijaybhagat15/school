import { motion, useInView } from "framer-motion";
import { GraduationCap, University, School, Users } from "lucide-react";
import { useRef } from "react";

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const stats = [
    {
      value: "92%",
      text: "High School Graduation Rate (2023)",
      icon: <GraduationCap size={40} className="text-white" />,
      color: "bg-blue-500",
    },
    {
      value: "100%",
      text: "Graduates Eligible for Cal State or UC Admissions",
      icon: <University size={40} className="text-white" />,
      color: "bg-red-700",
    },
    {
      value: "88%",
      text: "Matriculation to 2- and 4-Year Colleges (2023)",
      icon: <School size={40} className="text-white" />,
      color: "bg-blue-500",
    },
    {
      value: "1.7M",
      text: "Counseling Minutes Yearly to Support Students",
      icon: <Users size={40} className="text-white" />,
      color: "bg-red-700",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-6 px-6 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/images/background.svg')" }}
    >
      <h2 className="text-3xl font-bold text-blue-900">Our Impact</h2>

      <div className="flex flex-wrap justify-center gap-8 mt-8 text-blue-600">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-64"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center`}>
              {stat.icon}
            </div>
            <h3 className="text-xl font-bold mt-4">{stat.value}</h3>
            <p className="text-sm mt-2">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
