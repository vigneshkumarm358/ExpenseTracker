    import React, { useContext, useState } from "react";
    import AuthContext from "../context/AuthContext";

    const Login = () => {
    const { navigate, handleLogin } = useContext(AuthContext);
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    function handleData(e) {
        const { name, value } = e.target;
        setData(() => {
        return { ...data, [name]: value };
        });
    }
    return (
        <div className="min-h-screen flex justify-center bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-80 h-fit mt-24" onSubmit={(e) => handleLogin(e,data)}>
            <h1 className="text-xl font-semibold mb-4 text-center">Login</h1>

            {/* Username/Email Input */}
            <input
            name="username"
            value={data.username}
            onChange={handleData}
            placeholder="Enter username or email"
            type="text"
            className="border w-full p-2 mb-3 rounded-md"
            />

            {/* Password Input with Show Toggle */}
            <div className="relative">
            <input
                name="password"
                value={data.password}
                onChange={handleData}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="border w-full p-2 mb-3 rounded-md"
            />
            <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer text-blue-500 text-sm"
            >
                {showPassword ? "Hide" : "Show"}
            </p>
            </div>

            {/* Login Button */}
            <button
            type="submit"
            className="bg-sky-500 text-white w-full py-2 rounded-md hover:bg-sky-600 transition"
            >
            Login
            </button>

            {/* Navigation to Sign Up */}
            <p
            onClick={() => navigate("/register")}
            className="mt-4 text-center text-blue-500 cursor-pointer hover:underline"
            >
            Go to Sign Up
            </p>
        </form>
        </div>
    );
    };

    export default Login;
