// TrendingCourses.jsx
import { useState } from "react";
import type { JSX } from "react";

const courses = [
  {
    category: "NEET",
    title: "Foundation JEE & NCERT Online Course",
    details: [
      "Foundation Live Classes + NCERT Recorded Lectures",
      "Learn advanced concepts early with Foundation course",
      "8-10 Objective Tests in NCERT",
    ],
    price: "₹49,999",
    live: true,
  },
  {
    category: "JEE",
    title: "JEE Enthusiast Self Study Plus Course",
    details: [
      "Latest recording covering full syllabus",
      "Digital study material incl. books, RACEs & more",
      "32(part+full) syllabus tests",
    ],
    price: "₹16,900",
    live: true,
  },
  {
    category: "Class 6–10",
    title: "10th CBSE Board Online Course [All Subjects]",
    details: [
      "Board Focused LIVE Classes for All Subjects",
      "Subjective & Objective Format Mock Tests with Assessments",
      "Previous years Board Questions for Practise",
    ],
    price: "₹34,999",
    live: true,
  }
];

const TrendingCourses = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>("Class 6–10");

  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl text-white font-bold mb-6">Trending Courses</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          {["NEET", "JEE", "Class 6–10"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border cursor-pointer ${
                activeTab === tab
                  ? "bg-white border-blue-500 text-blue-600"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <hr className="border-gray-300 mb-8" />

        {/* Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                {/* Live Tag */}
                {course.live && (
                  <div className="flex items-center gap-2 bg-black text-white text-xs px-3 py-1 rounded-full w-fit mb-4">
                    <span>📹</span> LIVE
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

                {/* Details */}
                <ul className="mb-6 space-y-2 text-gray-700">
                  {course.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span> {item}
                    </li>
                  ))}
                </ul>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">
                    {course.price}
                    <span className="text-gray-500 text-sm">
                      {" "}
                      + Taxes applicable
                    </span>
                  </p>
                  <button className="text-blue-600 font-medium flex items-center gap-1 hover:underline">
                    Know more →
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* View All Courses */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
