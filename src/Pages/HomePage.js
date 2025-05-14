import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import CoinNotification from "../components/CoinNotification";


const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
      <CoinNotification/>
    </>
  );
};

export default Homepage;
