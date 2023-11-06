import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import topImage from "../../assets/Illustration top.png";
import bottomImage from "../../assets/Ilustration bottom.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10">
        <img className="w-1/2 lg:w-full" src={topImage} alt="top" />
      </div>
      <div className="absolute lg:relative z-10">
        <Header />
      </div>
      <div className="w-screen pt-60 md:w-2/3 lg:pt-80 md:justify-center md:items-center flex-col container">
        <h1 className="text-2xl text-center md:text-left md:text-6xl font-bold">
          Creative UX/UI Designer <br />
          Shreyas Kulkarni
          <br /> Based in India
        </h1>
        <div className="flex items-center justify-center md:items-start md:justify-start pt-[60px] gap-2">
          <a className="w-48 py-2.5 text-center bg-white bg-opacity-30 rounded-[30px] shadow border-2 border-white backdrop-blur-[23.15px]">
            Hire me
          </a>
          <a className="w-48 py-2.5 text-center bg-gradient-to-r from-fuchsia-500 to-blue-800 rounded-[30px] shadow border border-white ">
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute pt-20 lg:right-0 top-96 lg:top-72">
        <img className="w-full" src={bottomImage} alt="bottom" />
      </div>

    </div>
  );
};

export default Home;
