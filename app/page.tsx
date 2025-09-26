import GridImage from "../Components/Home/GridImage";
import React from "react";
import Navbar from "@/Components/Navbar.tsx";
const Home = () => {
  return (
    <>
      <div className="max-w-[90vw] mx-auto"></div>
      <GridImage />
      <Navbar></Navbar>

    </>
  );
};

export default Home;
