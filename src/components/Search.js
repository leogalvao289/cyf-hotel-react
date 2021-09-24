import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
  return (
    <div className="row search-wrapper">
      <div className="col-3" className="input">
        <form className="form-group search-box">
          <label htmlFor="customerName">Customer name</label>
          <div className="search-row">
            <input
              type="text"
              id="customerName"
              className="form-control"
              placeholder="Customer name"
            />
            <SearchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
