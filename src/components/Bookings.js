import React from "react";

import SearchResults from "./SearchResults.js";
import fakeBookings from "../fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        {<SearchResults results={fakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
