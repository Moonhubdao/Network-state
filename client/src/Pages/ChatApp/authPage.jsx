import React from "react";
import axios from "axios";
import Dashboard from "../Dashboard/dashboard";

const AuthPage = ({ onAuth }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const secret = form.secret.value;

    console.log("Username:", username)
    try {
      const response = await axios.post("http://localhost:8000/api/chat", {
        username: username,
        secret: secret,
      });
      onAuth(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-[#0D0C0C] via-[#2C0E23] to-[#0D0C0C] h-screen">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
        <p className="text-gray-600 mb-4">To finish up, set a username to continue</p>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="secret">
            Secret
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="secret"
            name="secret"
            type="password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
