import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import HotelsList from "./components/HotelsList";
import { searchHotels } from "./DAL/api";

function App() {
  const [inputsData, setInputsData] = useState({});
  const [hotelsToShow, setHotelsToShow] = useState([]);
  const submitHandler = async (data) => {
    if (!(data.ski_site && data.from_date && data.to_date && data.group_size)) {
      return;
    }
    const hotelsList = await searchHotels(data);
    setHotelsToShow(hotelsList);
  };
  return (
    <>
      <Header
        submitHandler={submitHandler}
        inputsData={inputsData}
        setInputsData={setInputsData}
      />
      <HotelsList inputsData={inputsData} hotelsToShow={hotelsToShow} />
    </>
  );
}

export default App;
