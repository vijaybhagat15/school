import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define each region's schools as separate objects
const bangaloreSchools: { name: string; image: string }[] = [
  { name: "NovaStar Primary School", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar Middle School", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar High School", image: "public/images/school1/s3.avif" },
];

const mumbaiSchools: { name: string; image: string }[] = [
  { name: "NovaStar Public School", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar International School", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar Senior Secondary", image: "public/images/school1/s3.avif" },
];

const delhiSchools: { name: string; image: string }[] = [
  { name: "NovaStar Academy Primary", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar Academy Middle", image: "public/images/school1/PrimarySchool.avif" },
  { name: "NovaStar Academy High", image: "public/images/school1/s3.avif" },
];

// Map region names to their corresponding school objects
const schoolsMap: Record<string, { name: string; image: string }[]> = {
  Bangalore: bangaloreSchools,
  Mumbai: mumbaiSchools,
  Delhi: delhiSchools,
};

const Schools = () => {
  const [selectedRegion, setSelectedRegion] = useState("Bangalore");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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
          {Object.keys(schoolsMap).map((region) => (
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
          {schoolsMap[selectedRegion].map((school, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img src={school.image} alt={school.name} className="h-64 w-64 rounded-lg" />
              <h3 className="font-semibold text-blue-900">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
