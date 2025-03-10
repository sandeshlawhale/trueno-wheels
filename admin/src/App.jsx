import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

export const BackendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [user, setUser] = useState(
    localStorage.getItem("user") ? localStorage.getItem("user") : ""
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
    }
  }, [token]);
  return (
    <>
      {!token ? (
        <Login setToken={setToken} setUser={setUser} />
      ) : (
        <div className="w-screen h-screen overflow-x-hidden">
          <div className="mx-auto w-[95%] sm:w-[90%] md:w-[85%]">
            <Navbar setToken={setToken} user={user} />

            <div className="flex">
              <Sidebar />
              <div className="pt-8 sm:pl-8 pl-4 flex-1">
                <Routes>
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/order" element={<Order token={token} />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="bottom-right" pauseOnHover />
    </>
  );
};

export default App;
