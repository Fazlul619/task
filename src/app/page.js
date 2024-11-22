import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#F4F8FF]">
      <div>
        <Header></Header>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default page;
