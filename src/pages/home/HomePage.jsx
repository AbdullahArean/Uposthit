/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="homeContainer">
      <Navbar appearance="subtle" active={active} onSelect={setActive} />
      <div className="widgets flex justify-center my-7">
        <div className="text-5xl mt-4 font-bold shadow-hblue shadow-xl p-16">
          Welcome To UPOSTHIT!
        </div>
      </div>
    </div>
  );
};
// };

export default Home;
