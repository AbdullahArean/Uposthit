import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const nav = useNavigate();
    const toDashboard = () => {
        nav('/');
    }
  return (
    <div className="font-bold text-center flex flex-col h-screen items-center justify-evenly py-48 my-auto">
      <div className="text-5xl">Error 404 Route does not exist</div>
      <div className="text-4xl">Hey, You seem to be lost!</div>
      <div className="text-4xl">
        Go back to{" "}
        <span onClick={toDashboard} className="text-blue-500 cursor-pointer hover:underline">
          Dashboard
        </span>
      </div>
    </div>
  );
};

export default NotFound;
