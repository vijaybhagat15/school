import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Schools = () => {
  const [selectedRegion, setSelectedRegion] = useState("Bangalore");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const schoolsData = {
    Bangalore: [
      { name: "NovaStar Primary School", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar Middle School", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar High School", logo: "images/school/s3.avif" },
    ],
    Mumbai: [
      { name: "NovaStar Public School", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar International School", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar Senior Secondary", logo: "images/school/s3.avif" },
    ],
    Delhi: [
      { name: "NovaStar Academy Primary", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar Academy Middle", logo: "images/school/PrimarySchool.avif" },
      { name: "NovaStar Academy High", logo: "images/school/s3.avif" },
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="bg-blue-700 text-white p-6 rounded-lg mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold">Join NovaStar Academy Today</h2>
          <p className="mt-2">Empowering students with quality education from primary to senior secondary level across India.</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-4 bg-white text-blue-700 px-6 py-2 rounded-full font-bold"
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Regions Selection */}
        <div className="flex justify-center space-x-6 mb-6">
          {Object.keys(schoolsData).map((region) => (
            <motion.button
              key={region}
              className={`px-4 py-2 rounded-full ${
                selectedRegion === region ? "bg-blue-700 text-white" : "bg-white text-blue-700 border border-blue-700"
              }`}
              onClick={() => setSelectedRegion(region)}
              whileHover={{ scale: 1.1 }}
            >
              {region}
            </motion.button>
          ))}
        </div>

        {/* School List */}
        <motion.div 
          ref={ref} 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, transition: { duration: 0.8 } } : {}}
        >
          {schoolsData[selectedRegion].map((school, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={school.logo} alt={school.name} className="h-64 w-64 rounded-lg" />
              <h3 className="font-semibold text-blue-900">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
