import type { JSX } from "react";
import { FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = (): JSX.Element => {
  return (
    <footer className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <ul className="space-y-1 text-sm">
              <li>About us</li>
              <li>Blog</li>
              <li>News</li>
              <li>MyExam EduBlogs</li>
              <li>Privacy policy</li>
              <li>Public notice</li>
              <li>Careers</li>
              <li>Dhoni Inspires NEET Aspirants</li>
              <li>Dhoni Inspires JEE Aspirants</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Help & Support</h3>
            <ul className="space-y-1 text-sm">
              <li>Refund policy</li>
              <li>Transfer policy</li>
              <li>Terms & Conditions</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Popular goals</h3>
            <ul className="space-y-1 text-sm">
              <li>NEET Coaching</li>
              <li>JEE Coaching</li>
              <li>6th to 10th</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Courses</h3>
            <ul className="space-y-1 text-sm">
              <li>Online Courses</li>
              <li>Distance Learning</li>
              <li>Online Test Series</li>
              <li>International Olympiads Online Course</li>
              <li>NEET Test Series</li>
              <li>JEE Test Series</li>
              <li>JEE Main Test Series</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Centers</h3>
            <ul className="space-y-1 text-sm">
              <li>Kota</li>
              <li>Bangalore</li>
              <li>Indore</li>
              <li>Delhi</li>
              <li>More centres</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Exam information</h3>
            <ul className="space-y-1 text-sm">
              <li>JEE Main</li>
              <li>JEE Advanced</li>
              <li>NEET UG</li>
              <li>CBSE</li>
              <li>NCERT Solutions</li>
              <li>Olympiad</li>
              <li>NEET 2025 Results</li>
              <li>NEET 2025 Answer Key</li>
              <li>NEET College Predictor</li>
              <li>NEET 2025 Counselling</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 text-lg">
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-600 mt-4 md:mt-0">
            TSG Career Institute Pvt. Ltd. © All Rights Reserved.
          </p>
          <img
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00"
            alt="ISO Badge"
            className="h-12 mt-4 md:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
