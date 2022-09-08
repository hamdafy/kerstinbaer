import React from "react";

import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Header from "./Header";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
    <div>
        <Header/>
    </div>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <button  onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;