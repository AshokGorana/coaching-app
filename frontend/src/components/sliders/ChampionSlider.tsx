// ChampionSlider.jsx
import type { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "./slider.css"; // your CSS with dot styles

const ChampionSlider = (): JSX.Element => {
  const examButtons = [
    { label: "JEE", active: true },
    { label: "NEET", active: false },
    { label: "Grade 6-10", active: false },
  ];

  return (
    <section className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-col space-y-3 lg:space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                Your Dream.
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                Our Expertise.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 font-medium max-w-md mx-auto lg:mx-0">
              What brings you to us today?
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {examButtons.map((exam) => (
                <button
                  key={exam.label}
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1824] ${
                    exam.active
                      ? "bg-white text-[#0f1824] shadow-lg"
                      : "border-2 border-white text-white hover:bg-white hover:text-[#0f1824]"
                  }`}
                >
                  {exam.label}
                </button>
              ))}
            </div>

            <div className="pt-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0f1824]">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right slider */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          effect="fade"
          spaceBetween={20}
          slidesPerView={1}
          className="pb-10"
        >
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full max-w-[400px] h-full object-cover mb-10"
                      src="/images/slide1.webp"
                      alt="Students studying together"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full max-w-[400px] h-full object-cover mb-10"
                      src="/images/slide2.webp"
                      alt="Online learning platform"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-full max-w-[400px] h-full object-cover mb-10"
                      src="/images/slide3.webp"
                      alt="Academic success celebration"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChampionSlider;
