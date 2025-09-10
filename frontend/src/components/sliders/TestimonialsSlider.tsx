import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "I chose ALLEN Online Courses because I wanted to balance my NEET prep with my school schedule. The course structure, from daily homework to post-class handouts, was well-organized.",
    name: "Sarth Patil",
    details: "NEET-UG 2024, Score 710/720",
    img: "https://asset.allen.in/ad01b64a-4dbf-478a-9cc5-ec7d7d03de2d/original.png",
  },
  {
    text: "I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.",
    name: "Sekh Galib Raza",
    details: "NEET-UG 2024, Score 690/720",
    img: "https://asset.allen.in/398c581a-891c-4a06-b7c2-1783f80c0402/original.png",
  },
  {
    text: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
    name: "Avik Das",
    details: "JEE Adv. 2024, AIR 69",
    img: "https://asset.allen.in/ad01b64a-4dbf-478a-9cc5-ec7d7d03de2d/original.png",
  },
  {
    text: "I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.",
    name: "Shifa Fatima",
    details: "NEET-UG 2024, Score 696/720",
    img: "https://asset.allen.in/398c581a-891c-4a06-b7c2-1783f80c0402/original.png",
  },
];

export default function TestimonialsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-center text-2xl font-bold mb-8 text-white">
        Testimonials from our students
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="p-4">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-md h-full flex flex-col justify-between">
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-700 mb-6">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold uppercase text-sm">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

