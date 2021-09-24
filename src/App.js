import React from "react";
import Bookings from "./components/Bookings";
import Heading from "./components/Heading";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
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
      <Bookings SearchResults={SearchResults} />
      <TouristInfoCards />
      <Footer footerArray={footerArray} />
    </div>
  );
};

export default App;
