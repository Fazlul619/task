import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BigDealSection from "./components/BigDealSection";
import ManCollectionSection from "./components/ManCollectionSection";
import Footer from "./components/Footer";

const page = () => {
  return (
   
      <div>
        <Banner></Banner>
        <BigDealSection></BigDealSection>
        <ManCollectionSection></ManCollectionSection>
      </div>
   
  );
};

export default page;
