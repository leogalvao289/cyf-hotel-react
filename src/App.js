import React from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";
import "./App.css";

const footerArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Search />
      <Bookings />
      <TouristInfoCards />
      <Cards />
      <Footer footerArray={footerArray} />
    </div>
  );
};

export default App;
