import React from "react";
import Banner from "../../Components/Banner/Banner";
import FourFunnel from "./FourFunnel/FourFunnel";
import Revolution from "./Revolution/Revolution";
import BrandCard from "./Brand/BrandCard";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        title="Convert Customers And Followers Into Sellers! "
        subTitle="Build a Commission-based Sales Force for your brand."
        primaryBtnText="Get Started"
        secondaryBtnText="For Creator"
        bgColor="yellow"
        primaryUrl={"/contact"}
        secondaryUrl={"/creator"}
      />
      <FourFunnel />
      <Revolution />
      <BrandCard />
      <Footer />
    </div>
  );
};

export default Home;
