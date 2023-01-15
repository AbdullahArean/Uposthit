import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="homeContainer flex-1">
        <Navbar />
        <hr className="mx-2 mb-3" />
        <div className="widgets flex justify-center ml-7 my-7">
          <div className="text-5xl mt-4 font-bold shadow-hblue shadow-xl p-16">Welcome To UPOSTHIT!</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
