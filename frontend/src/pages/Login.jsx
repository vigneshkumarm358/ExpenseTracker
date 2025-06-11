import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const { api, setIsAuthorized, navigate } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("api/token/", { email, password });
      if (response.status == 200) {
        localStorage.setItem("ACCESS_TOKEN", response.data.access);
        localStorage.setItem("REFRESH_TOKEN", response.data.refresh);
        setIsAuthorized(true);
        navigate("/");
      }
      else{
        console.log(response.error);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        onSubmit={handleLogin}
        className="flex flex-col shadow-2xl rounded p-4"
      >
        <h1>Login</h1>
        <input
          className="border border-gray-600 py-2 pl-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Enter Your Username or Email"
        />
        <input
          className="border border-gray-600 py-2 pl-3 rounded"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showpassword ? "text" : "password"}
          placeholder="Enter Your Password"
        />
        <div className="flex gap-1">
          <input
            type="checkbox"
            id="showpass"
            value={showpassword}
            onClick={() => setShowPassword(!showpassword)}
          />
          <label htmlFor="showpass">Show Password</label>
        </div>
        <button>Login</button>
        <p onClick={() => navigate('/register')}>If you don't have an account. then click here to create Account.</p>
      </form>
    </div>
  );
};

export default Login;
