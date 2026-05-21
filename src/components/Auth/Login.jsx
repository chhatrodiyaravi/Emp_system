import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submintHandler = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", pass);
    setEmail("");
    setPass("");
  };

  return (
    <div className=" h-screen w-screen flex items-center justify-center ">
      <div className="border-2  p-20 border-emerald-300 rounded-2xl">
        <form
          onSubmit={(e) => {
            submintHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter Email"
          />
          <input
            required
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />

          <button className="mt-5 w-full bg-emerald-300 py-2  px-5 rounded-full border-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
