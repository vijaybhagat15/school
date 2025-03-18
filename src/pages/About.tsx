import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const facultyMembers = [
    { id: 1, image: "images/About/Principal.jpg", name: "Dr. Emily Carter", subject: "Principal" },
    { id: 2, image: "images/About/Mathematics.jpg", name: "Mr. James Wilson", subject: "Mathematics" },
    { id: 3, image: "images/About/Science.jpg", name: "Ms. Olivia Roberts", subject: "Science" },
  ];

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div className="text-black border-y-2 border-white text-secondary">
      <div className="container mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-primary font-serif">Our Journey</h2>
            <p className="mt-6 text-center md:text-left leading-relaxed">
              NovaStar Academy was founded with a vision to provide quality education that nurtures young minds. 
              Our school is committed to excellence in academics, character development, and innovation.
            </p>
            <p className="mt-4 text-center md:text-left leading-relaxed">
              With a dedicated faculty and state-of-the-art facilities, we strive to create an environment where 
              students can explore, learn, and grow into responsible global citizens.
            </p>
          </motion.div>
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center bg-blue-500 rounded-3xl p-[1px]"
          >
            <img
              src="images/About/campus.jpg"
              alt="Our Campus"
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-primary font-serif">Our Mission</h2>
          <p className="mt-6 leading-relaxed max-w-3xl mx-auto">
            Our mission is to provide a nurturing and inclusive environment that fosters academic excellence,
            creativity, and personal growth. We aim to empower students with the skills and knowledge to succeed in a changing world.
          </p>
        </motion.div>

        {/* Faculty Section */}
        <div className="mt-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl text-primary mb-8 font-serif">Meet Our Faculty</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-4 rounded-lg shadow-lg border-2 border-transparent hover:scale-105 transition-transform"
                >
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover rounded-md mb-4 border-2 border-blue-500" />
                  <h3 className="text-xl font-semibold mb-2 font-serif">{member.name}</h3>
                  <p className="font-sans">{member.subject}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
