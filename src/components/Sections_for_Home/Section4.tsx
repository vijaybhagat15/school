import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Video } from "lucide-react";
import { useRef } from "react";

const schools = [
  {
    category: "West Adams/Baldwin Village",
    items: [
      { name: "Stella Elementary Charter Academy", grade: "TK - 4" },
      { name: "Stella Middle Charter Academy", grade: "5 - 8" },
      { name: "Stella High Charter Academy", grade: "9 - 12" },
    ],
  },
  {
    category: "Koreatown Schools",
    items: [
      { name: "Rise Kohyang Elementary School", grade: "TK - 4" },
      { name: "Rise Kohyang Middle School", grade: "5 - 8" },
      { name: "Rise Kohyang High School", grade: "9 - 12" },
    ],
  },
  {
    category: "San Fernando Valley",
    items: [
      { name: "Valor Academy Elementary School", grade: "TK - 4" },
      { name: "Valor Academy Middle School", grade: "5 - 8" },
      { name: "Valor Academy High School", grade: "9 - 12" },
    ],
  },
];

const videos = [
  { language: "English", url: "https://www.youtube.com/embed/sample1" },
  { language: "English", url: "https://www.youtube.com/embed/sample2" },
  { language: "English", url: "https://www.youtube.com/embed/sample3" },
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  return (
    <section ref={ref} className="py-6 px-6 text-center text-blue-600">
      <motion.h2
        className="text-3xl font-bold text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Our Schools
      </motion.h2>

      <motion.p
        className=" mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We operate joyful, high-quality, tuition-free charter schools serving over 3,800 students 
        from TK to 12th grade in Los Angeles communities.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {schools.map((school, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={32} className="text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold ">{school.category}</h3>
            <ul className="mt-4 space-y-3 w-full text-left">
              {school.items.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center ">
                  <span>{item.name}</span>
                  <GraduationCap size={20} className="text-gray-400" />
                  <span className="">{item.grade}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h4 className="text-lg font-semibold  flex items-center justify-center gap-2">
              <Video size={24} className="text-red-500" /> {video.language}
            </h4>
            <div className="mt-4 aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-48 rounded-lg"
                src={video.url}
                title={video.language}
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
