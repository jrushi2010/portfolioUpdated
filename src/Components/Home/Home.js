import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import topImage from "../../assets/Illustration top.png";
import bottomImage from "../../assets/Ilustration bottom.png";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="absolute">
        <img className="w-1/2 md:w-full" src={topImage} alt="top" />
      </div>
      <Header />
      <div className="w-screen pt-32 md:w-2/3 md:pt-96 lg:pt-72  md:justify-center md:items-center flex-col md:gap-16 container">
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
      <div className="absolute bottom-0 right-0 pt-10 md:pt-32 lg:pt-0 top-96">
        <img className="md:w-full " src={bottomImage} alt="bottom" />
      </div>

    </div>
  );
};

export default Home;
