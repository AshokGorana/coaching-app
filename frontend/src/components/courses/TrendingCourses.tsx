// TrendingCourses.jsx
import { useState } from "react";
import type { JSX } from "react";
import { coursesData } from "./coursesData";

const TrendingCourses = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("Class 10-12");

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl text-white font-bold mb-6">Start Preparing Today with TSG Classes</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["Civil Services Exams", "Centeral Govt Exams", "Defence Forces Exams", "NET", "Class 10-12"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer
                ${activeTab === tab
                  ? "button-active"
                  : "button-inactive"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Courses */}
        <div className="flex flex-wrap gap-8">
          {coursesData
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <div
                key={course.id}
                className="flex flex-col items-center gap-5 bg-white/5 border border-white/15 rounded-xl p-6 backdrop-blur-md text-white w-65 cursor-pointer">
                  <img className="w-15 h-15" src={course.image} alt="image" />
                  <div>{course.title}</div>
              </div>
            ))}
        </div>

        {/* View All Courses */}
        {/* <div className="flex justify-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
            View All Courses
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TrendingCourses;
