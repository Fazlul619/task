import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BigDealSection from "./components/BigDealSection";
import ManCollectionSection from "./components/ManCollectionSection";
import Footer from "./components/Footer";
import SummerDealSection from "./components/SummerDealSection";
import NewArrivalSection from "./components/NewArrivalSection";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <NewArrivalSection></NewArrivalSection>
      <BigDealSection></BigDealSection>
      <ManCollectionSection></ManCollectionSection>
      <SummerDealSection></SummerDealSection>
    </div>
  );
};

export default page;
