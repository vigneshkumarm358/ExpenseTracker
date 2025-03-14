import React, { useState } from "react";

const Register = () => {
  const [data, setData] = useState({
    password: "",
    username: "",
    email: "",
    phone_number: "",
    profile_picture: "",
    membre_ship: "gold",
  });
  const [profile, setProfile] = useState(null);

  const handleData = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const file = files[0];
      setProfile(URL.createObjectURL(file));
    }

    setData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/register/`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        onSubmit={handleRegister}
      >
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Register
        </h1>
        <div className="mg-4">
          {profile ? (
            <img
              src={profile}
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/952/574/non_2x/male-profile-picture-vector.jpg"
              alt=""
              className="border border-gray-400 p-2 w-32 h-32 rounded-full object-cover"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Profile Picture
          </label>
          <input
            onChange={handleData}
            type="file"
            name="profile_picture"
            className="w-full border p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Username</label>
          <input
            onChange={handleData}
            type="text"
            name="username"
            placeholder="Enter Username"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <input
            onChange={handleData}
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Phone Number
          </label>
          <input
            onChange={handleData}
            type="number"
            name="phone_number"
            placeholder="Enter Phone Number"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">Password</label>
          <input
            onChange={handleData}
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Confirm Password
          </label>
          <input
            onChange={handleData}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-1">Membership</label>
          <select
            name="membre_ship"
            onChange={handleData}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
