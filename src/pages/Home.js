import React from "react";
import ConversionTable from "../Components/ConversionTable";
import CurrenyControl from "../Components/Form/CurrenyControl";
import Banner from "../Components/UI/Banner";
// import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="currency-control--box">
        <CurrenyControl defaultEnabled={true} selectFromEnabled={true} />
      </div>
      <ConversionTable />
    </>
  );
};

export default Home;
