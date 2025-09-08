"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending OTP to the email
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);
    setMessage(`OTP sent to ${email}`);
    console.log("Generated OTP:", generatedOtp); // For testing, remove in production
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredOtp === otp) {
      setMessage("OTP verified! You can now reset your password.");
      // Proceed to password reset page or next step
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="mb-6">
        <Image src="/agrisenselogo.png" alt="Logo" width={80} height={80} />
      </div>
      <h1 className="text-2xl font-bold text-green-700 mb-2">AgriSense</h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-xl text-black text-center font-semibold mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-800 text-center mb-4">
          {otpSent
            ? "Enter the OTP sent to your email to reset your password."
            : "Enter your email address and we'll send you an OTP to reset your password."}
        </p>

        {!otpSent ? (
          <form className="space-y-4" onSubmit={handleSendOtp}>
            <div>
              <label className="block mb-1 text-black font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <div>
              <label className="block mb-1 text-black font-medium">OTP</label>
              <input
                type="text"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                placeholder="Enter the OTP"
                className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Verify OTP
            </button>
          </form>
        )}

        {message && (
          <p className="text-center text-sm text-green-600 mt-4">{message}</p>
        )}

        <div className="text-center mt-4 text-gray-600">
          <Link href="/login" className="text-green-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
