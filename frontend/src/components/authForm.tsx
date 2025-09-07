"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = type === "login";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="mb-6">
        <Image src="/agrisenselogo.png" alt="Logo" width={80} height={80} />
      </div>
      <h1 className="text-2xl font-bold text-green-700 mb-2">AgriSense</h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 text-gray-500 ${isLogin ? "text-green-700" : "bg-white font-bold"}`}
          >
            <Link href="/login">Login</Link>
          </button>
          <button
            className={`flex-1 py-2 text-gray-500 ${!isLogin ? "text-green-700" : "bg-white font-bold"}`}
          >
            <Link href="/signup">Sign Up</Link>
          </button>
        </div>

        <h2 className="text-xl text-black text-center font-semibold mb-2">
          {isLogin ? "Welcome back" : "Create your account"}
        </h2>
        <p className="text-gray-800 text-center mb-4">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Fill in the details to create a new account"}
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-black font-medium">Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-black font-medium flex justify-between">
              <span>Password</span>
              {isLogin && <Link href="/forgot" className="text-green-600 text-sm">Forgot Password?</Link>}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {isLogin && (
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">Remember me</label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex gap-4">
          <button className="flex-1 border border-gray-300 py-2 text-green-900 cursor-pointer rounded-md hover:bg-green-300 transition flex justify-center items-center">
            <span className="mr-2">G</span> Google
          </button>
          <button className="flex-1 border border-gray-300 py-2 rounded-md cursor-pointer text-green-900 hover:bg-green-300 transition flex justify-center items-center">
            <span className="mr-2">F</span> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
