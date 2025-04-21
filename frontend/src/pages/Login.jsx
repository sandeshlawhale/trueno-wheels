import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../util/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const login = () => {
  const [currentState, setCurrentState] = useState("login");
  const { token, setToken, BackendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "sign up") {
        const response = await axios.post(BackendUrl + "api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          toast.success("User Registered.");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(BackendUrl + "api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          toast.success("User Logged in...");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="w-[90%] md:w-96 mt-20 m-auto flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">
        {currentState === "login" ? "Login" : "Sign up"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" w-full flex flex-col gap-3 items-center"
      >
        {currentState === "login" ? (
          ""
        ) : (
          <input
            className="w-full px-4 py-2 border-2 border-gray-300 rounded text-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        )}
        <input
          className="w-full px-4 py-2 border-2 border-gray-300 rounded text-black"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="w-full px-4 py-2 border-2 border-gray-300 rounded text-black"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div className="w-full flex justify-between text-sm -mt-2">
          <p className=" cursor-pointer">Forget Username/Pasword?</p>
          <p className=" cursor-pointer">
            {currentState === "login" ? (
              <p onClick={() => setCurrentState("sign up")}>Create Account</p>
            ) : (
              <p onClick={() => setCurrentState("login")}>Login Here</p>
            )}
          </p>
        </div>
        <button className="px-8 py-2 text-white bg-black mt-2 tracking-wider active:bg-black/70">
          {" "}
          {currentState === "login" ? "login" : "sign up"}
        </button>
      </form>
    </div>
  );
};

export default login;
