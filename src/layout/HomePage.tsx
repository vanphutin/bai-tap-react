import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="text-3xl font-bold mt-3 ">
        Quản lí thư viện tại ĐẠI HỌC DUY TÂN
      </div>
      <Link to="/book">
        <button className="p-3 bg-red-400 border rounded-lg text-white">
          Get start
        </button>
      </Link>
    </>
  );
};

export default HomePage;
