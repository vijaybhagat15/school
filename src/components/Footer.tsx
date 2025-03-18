import { FaFacebook, FaInstagram, FaYoutube, FaLink } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold">About Nova Star</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            Nova Star Schools is a free, public, open-enrollment charter school
            organization that operates nine schools across Los Angeles.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-3 text-sm">
            <strong>Mailing Address:</strong> 5101 Santa Monica Blvd Ste 8, PMB 93, Los Angeles, CA 90029
          </p>
          <p className="text-sm">
            <strong>Physical Address:</strong> 3435 Wilshire Blvd., Suite 2460, Los Angeles, CA 90010
          </p>
          <p className="text-sm">📞 (323) 954-9957</p>
          <p className="text-sm">📠 (323) 978-2423</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            {["Board Meeting Agendas", "Title IX Policy", "Financial Information", "Privacy Policy"].map((link, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Schools */}
        <div>
          <h2 className="text-lg font-semibold">Our Schools</h2>
          <ul className="mt-3 space-y-2">
            {["Elementary School", "Middle School", "High School", "Special Programs"].map((school, index) => (
              <li key={index}>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  {school}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="text-gray-300 hover:text-white transition text-2xl">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition text-2xl">
          <FaFacebook />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition text-2xl">
          <FaYoutube />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition text-2xl">
          <FaLink />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
