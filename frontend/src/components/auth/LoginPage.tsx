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
        <div className="mb-25">
        <h2 className="text-4xl font-semibold text-center mb-2">
          Login to account
        </h2>
        <p className="text-center text-sm text-gray-500">Welcome back! Please enter your details to continue.</p>
        </div>
        
        <div className="mb-2">Email address</div>
        <input
          type="tel"
          placeholder="Enter your email address"
          value={mobile}
          onChange={handleMobileChange}
          className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring focus:ring-blue-300"
        />

        {/* Password */}
        <div className="mb-2">Password</div>
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

         {/* remember and forgot password */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center gap-2"><input className="w-4 h-4 cursor-pointer" type="checkbox" />
          Remember me</div>
          <div className="text-blue-600 cursor-pointer">Forgot your password?</div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition hover:text-black cursor-pointer"
        >
          <FcGoogle size={24} />
          <span>Login with Google</span>
        </button>

        {/* Footer */}
        <p className="text-xs text-center mt-6 text-gray-500">
          By continuing, you accept our{" "}
          <a href="#" className="text-blue-600 underline-none">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline-none">
            T&C
          </a>.
        </p>
        <p className="text-xs text-center mt-6 text-gray-500">Already have an account? <a href="/register" className="text-blue-600 underline-none">Register now</a></p>
      </div>
    </div>
  );
}
