import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BackendUrl } from "../App";

const Login = ({ setToken, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(BackendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        setUser(response.data.email);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-blue-50">
      <div className="p-4 border bg-white border-gray-500 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col p-4  gap-4">
          <h1 className="text-xl font-semibold tracking-wide">
            Admin Login | TruenoWheels
          </h1>
          <label htmlFor="email" className="flex flex-col gap-1 capitalize">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xyz@gmail.com"
              className="border px-5 py-2 rounded-md border-gray-500"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-1 capitalize">
            password
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="border px-5 py-2 rounded-md border-gray-500"
            />
          </label>
          <button
            type="Submit"
            className="bg-black text-white text-xl px-6 py-1.5 rounded-md"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
