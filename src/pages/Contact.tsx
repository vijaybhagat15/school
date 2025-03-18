import { FaEnvelope, FaPhoneAlt, FaUser, FaPaperPlane,FaEdit,FaComment } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
      {/* Main Content Section */}
      <div className="max-w-screen-lg mx-auto p-8 space-y-12 font-sans text-blue-600">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="">
            At **NovaStar Academy**, we believe in fostering strong communication
            with parents, students, and staff. Reach out to us for any inquiries,
            support, or feedback.
          </p>
        </motion.div>

        {/* School Services */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Student Support */}
          <div className="space-y-4">
            <img
              src="images/contact/StudentSupport.jpg"
              alt="Student Support"
              className="w-full rounded-lg shadow-md border-[1px] border-blue-500"
            />
            <h2 className="text-xl font-bold font-serif text-blue-900">Student Support</h2>
            <p className="">
              We are here to support our students academically and emotionally.
              Our dedicated staff ensures every child gets the assistance they
              need.
            </p>
          </div>

          {/* Parent Communication */}
          <div className="space-y-4">
            <img
              src="images/contact/ParentCommunication.jpg"
              alt="Parent Communication"
              className="w-full rounded-lg shadow-md border-[1px] border-blue-500"
            />
            <h2 className="text-xl font-bold font-serif text-blue-900">
              Parent Communication
            </h2>
            <p className="">
              We keep parents informed with regular updates, newsletters, and
              meetings to ensure a collaborative approach to education.
            </p>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold text-center font-serif">
            How Can We Assist You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-md border-[1px] border-blue-500">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <FaPhoneAlt className="text-blue-900" /> Call Us
              </h3>
              <p className="">
                For admissions, queries, or concerns, call our support team.
              </p>
            </div>

            {/* Email Support */}
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md border-[1px] border-blue-500">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <FaEnvelope className="text-yellow-500" /> Email Us
              </h3>
              <p className="">
                Drop an email, and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Feedback */}
            <div className="bg-red-100 p-6 rounded-lg shadow-md border-[1px] border-blue-500">
              <h3 className="text-lg font-bold flex items-center gap-2 font-serif">
                <FaPaperPlane className="text-red-500" /> Give Feedback
              </h3>
              <p className="">
                Your feedback helps us improve our school experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col lg:flex-row items-center justify-center p-6 font-sans"
      >
       {/* Contact Form */}
        <div className="w-full lg:w-1/2 max-w-md text-blue-600">
        <div className="shadow-xl rounded-lg p-8 border-[1px] border-blue-500 hover:border-blue-600 transition-all duration-300 hover:scale-105">
            <h1 className="text-lg font-bold text-center mb-6 font-serif text-blue-900">
            Send a Message
            </h1>
            <form className="space-y-4">
            {/* Name Field */}
            <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 border-blue-400 focus:ring-blue-500"
                />
            </div>

            {/* Email Field */}
            <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 border-blue-400 focus:ring-blue-500"
                />
            </div>

            {/* Subject Field */}
            <div className="relative">
                <FaEdit className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                type="text"
                placeholder="Subject"
                className="w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 border-blue-400 focus:ring-blue-500"
                />
            </div>

            {/* Message Field */}
            <div className="relative">
                <FaComment className="absolute left-3 top-4 transform -translate-y-1/2" />
                <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full pl-10 pr-3 py-3 border rounded-md focus:ring-2 border-blue-400 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-80 transition-all duration-500 flex items-center justify-center"
            >
                <FaPaperPlane className="mr-2" />
                <div>Send Message</div>
            </button>
            </form>
        </div>

        </div>
      </motion.div>
    </>
  );
}
