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
        <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-6">Start Preparing Today with TSG Classes</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8">
          {["Civil Services Exams", "Centeral Govt Exams", "Defence Forces Exams", "NET", "Class 10-12"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`trending-button px-3 py-2 sm:px-5 sm:py-2 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer text-xs sm:text-sm md:text-base whitespace-nowrap
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
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
          {coursesData
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <div
                key={course.id}
                className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 bg-white/5 border border-white/15 rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-md text-white w-full sm:w-48 md:w-65 cursor-pointer">
                  <img className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15" src={course.image} alt="image" />
                  <div className="text-sm sm:text-base text-center">{course.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
