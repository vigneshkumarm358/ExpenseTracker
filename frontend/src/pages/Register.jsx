import React, { useContext, useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [showconfirmpass, setShowconfirmpass] = useState(false);
  const { api, navigate } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Check the Password");
      return;
    }
    try {
      const response = await api.post("api/register/", { username, password, email });

      
      if (response.status === 201) {
        console.log(response);
        navigate("/login");
      } else {
        console.log(response);
      }
    } catch (error) {}
  };
  return (
    <div className="p-4">
      <form className="flex flex-col gap-2" onSubmit={handleRegister}>
        <h1>Create Account</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border py-2 pl-3 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border py-2 pl-3 rounded"
        />
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border py-2 pl-3 rounded w-full"
          />
          {showpass ? (
            <IoMdEye
              onClick={() => setShowpass(!showpass)}
              className="absolute top-[30%] text-xl right-2"
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setShowpass(!showpass)}
              className="absolute top-[30%] text-xl right-2"
            />
          )}
        </div>
        <div className="relative">
          <input
            type={showconfirmpass ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border py-2 pl-3 rounded w-full"
          />
          {showconfirmpass ? (
            <IoMdEye
              onClick={() => setShowconfirmpass(!showconfirmpass)}
              className="absolute top-[30%] text-xl right-2"
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setShowconfirmpass(!showconfirmpass)}
              className="absolute top-[30%] text-xl right-2"
            />
          )}
        </div>
        <button className="w-full cursor-pointer py-2.5 text-white bg-blue-500 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
