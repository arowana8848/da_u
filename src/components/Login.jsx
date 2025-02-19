import React from "react";
import Navbar from "./Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?login,security')" }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">User Login</h2>
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition">
            Login
          </button>
          <p className="text-sm text-gray-600 mt-4">
             Don't have an account? <a href="/signup" className="text-pink-500 font-bold">Sign up</a>
          </p>

          <p className="text-sm text-gray-600 mt-4">
             Login as <a href="/admin-login" className="text-pink-500 font-bold">Admin?</a>
          </p>
        </div>
      </div>
    </>
  );
}
