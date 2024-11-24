import React from "react";
import ReviewSection from "./components/ReviewSection";
import FeatureProductSection from "./components/FeatureProductSection";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#F4F8FF]">
      <FeatureProductSection></FeatureProductSection>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default page;
