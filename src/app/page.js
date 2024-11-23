import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BigDealSection from "./components/BigDealSection";
import ManCollectionSection from "./components/ManCollectionSection";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#F4F8FF]">
      <div>
        <Header></Header>
        <Banner></Banner>
        <BigDealSection></BigDealSection>
        <ManCollectionSection></ManCollectionSection>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default page;
