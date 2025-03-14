import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="bg-stone-200 min-h-[100vh] w-full flex justify-center items-start">
      <div className="bg-white p-8 flex flex-col items-center gap-4 mt-8 rounded-lg">
        <img
          src={`http://127.0.0.1:8000/${user.profile}`}
          alt=""
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="grid grid-cols-[30%_70%]">
          <p>Username :</p>
          <h1>{String(user.username).toUpperCase()}</h1>
          <p>Email :</p>
          <h1>{user.email}</h1>
          <p>Phone :</p>
          <h1>{user.phone}</h1>
          <p>Member :</p>
          <h1>{user.member}</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
