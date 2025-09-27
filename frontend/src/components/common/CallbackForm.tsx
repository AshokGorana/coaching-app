import type { JSX } from "react";

const CallbackForm = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center p-6 bg-[#1d283d]">
      <div className="flex flex-col gap-18 md:flex-row items-center p-6 md:p-10 max-w-5xl w-full">
        {/* Left Side Image */}
        <div className="callBackIcon flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src="https://asset.allen.in/dccd40f4-6c9d-4d84-8dc5-287391ec51a2/original.webp"
            alt="Student Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Side Form */}
        <div className="min-w-[40vw] flex-1 text-white bg-[#111c2e] px-12 py-4 rounded-2xl shadow-lg sm:px-10">
          <h2 className="text-xl font-bold mb-4">Request a callback</h2>

          <hr className="border-gray-300 mb-7 opacity-50" />

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-1">Student’s full name</div>
                <input
                  type="text"
                  placeholder="Ex: Rohit Singh"
                  className="border rounded-lg p-3 w-full"
                />
              </div>

              <div>
                <div className="mb-1">Mobile Number</div>
                <input
                  type="text"
                  placeholder="Ex: +91 9876543210"
                  className="border rounded-lg p-3 w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-1">Class</div>
                <select className="border rounded-lg p-3 w-full cursor-pointer">
                  <option className="bg-[#111c2e] cursor-pointer">10th</option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    11th Arts
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    11th Commerce
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    12th Arts
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    12th Commerce
                  </option>
                </select>
              </div>

              <div>
                <div className="mb-1">Goals</div>
                <select className="border rounded-lg p-3 w-full cursor-pointer">
                  <option className="bg-[#111c2e] cursor-pointer">
                    Civil Services
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Centeral Govt
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Defence Forces
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">NET</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-1">Preferred Courses</div>
                <select className="border rounded-lg p-3 w-full cursor-pointer">
                  <option className="bg-[#111c2e] cursor-pointer">
                    Online Courses
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Classroom Courses
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Online Test Series
                  </option>
                </select>
              </div>

              <div>
                <div className="mb-1">State</div>
                <select className="border rounded-lg p-3 w-full cursor-pointer">
                  <option className="bg-[#111c2e] cursor-pointer">
                    Rajasthan
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Maharashtra
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Gujarat
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Uttar Pradesh
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Jharkhand
                  </option>
                  <option className="bg-[#111c2e] cursor-pointer">
                    Telangana
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center gap-5">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
              </p>

              <button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-12 py-1 font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;
