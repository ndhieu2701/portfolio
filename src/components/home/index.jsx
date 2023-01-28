import React from "react";
import { useSelector } from "react-redux";
import HomeData from "../homeData";
import Social from "../social";
import "./home.css";

const Home = () => {
  const theme = useSelector((state) => state.themes.themes);
  return (
    <section id="home" className={`home ${theme}`}>
      <div className="home-container">
        <Social />
        <HomeData />
      </div>
    </section>
  );
};

export default Home;
