import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar;
// import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-screen bg-[#0f1824]">
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              {/* <main className="pt-20">
                <ChampionSlider />
                <StudentSlider />
                <ProgramCards />
                <TrendingCourses />
                <CallbackForm />
                <Footer />
              </main> */}
            </>
          }
        />

        {/* Login page route */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
}
