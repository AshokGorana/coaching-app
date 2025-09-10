import { useState, ChangeEvent } from "react";
import type { JSX } from "react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage(): JSX.Element {
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (): void => {
    console.log("Mobile:", mobile);
    console.log("Password:", password);
  };

  const handleGoogleLogin = (): void => {
    console.log("Google Login Clicked");
  };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1824] text-white px-4">
      <div className="max-w-md w-full bg-[#0f1824] rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {/* <img src="/allen-logo.png" alt="Logo" className="h-10" /> */}
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-6">
          Login to your account
        </h2>

        {/* Mobile Number */}
        <input
          type="tel"
          placeholder="Enter 10-digit mobile number"
          value={mobile}
          onChange={handleMobileChange}
          className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition hover:text-black cursor-pointer"
        >
          <FcGoogle size={24} />
          <span>Continue with Google</span>
        </button>

        {/* Footer */}
        <p className="text-xs text-center mt-6 text-gray-500">
          By continuing, you accept our{" "}
          <a href="#" className="text-blue-600 underline">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            T&C
          </a>.
        </p>
      </div>
    </div>
  );
}
