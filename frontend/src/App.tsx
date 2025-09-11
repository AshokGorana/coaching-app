import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import ChampionSlider from "./components/sliders/ChampionSlider";
import StudentSlider from "./components/sliders/StudentSlider";
import ProgramCards from "./components/courses/ProgramCards";
import TrendingCourses from "./components/courses/TrendingCourses";
import CallbackForm from "./components/common/CallbackForm";
import Footer from "./components/common/Footer";
import LoginPage from "./components/auth/LoginPage";
import Register from "./pages/register";

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
              <main className="pt-20">
                <ChampionSlider />
                <StudentSlider />
                <ProgramCards />
                <TrendingCourses />
                <CallbackForm />
                <Footer />
              </main>
            </>
          }
        />

        {/* Login page route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
