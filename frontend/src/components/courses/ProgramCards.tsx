// ProgramCards.jsx
import type { JSX } from "react";

const programs = [
  {
    title: "JEE",
    img: "https://asset.allen.in/4b516fee-c744-433e-9476-3cac4cd0cc0e/original.webp",
  },
  {
    title: "NEET",
    img: "https://asset.allen.in/c07d22aa-0dec-402c-827f-424cef392ba9/original.webp",
  },
  {
    title: "Grade 10-12",
    img: "https://asset.allen.in/50fd06a0-4b73-4fda-abd2-c1dcc21c0229/original.webp",
  },
];

const ProgramCards = (): JSX.Element => {
  return (
    <div className="bg-[#0d1624] text-white px-6">
      <h2 className="-2xl font-semibold mb-8 text-center">
        Pick the right course for you
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-[#111c2e] rounded-2xl p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-bold mb-4">{program.title}</h3>
            <img src={program.img} alt={program.title} className="w-full h-40 object-contain mb-4" />
            <button className="text-blue-400 flex items-center gap-1 hover:underline">
              View <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCards;
