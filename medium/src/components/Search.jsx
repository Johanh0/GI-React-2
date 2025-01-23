// import { useState } from "react";
// import Select from "./Select";
import Submit from "./Submit";
import "../css/components/search.css";
import searchIcon from "../assets/search-icon.svg";

const Search = ({ onInputValue, onSearch, inputValue }) => {
  return (
    <section className="search">
      <form onSubmit={onSearch} action="" className="form">
        <div className="form__search">
          <img src={searchIcon} alt="Search icon" />
          <input
            onChange={onInputValue}
            type="search"
            value={inputValue}
            id="search__input"
          />
        </div>
        {/* <Select onChange={onCategory} /> */}
        <Submit />
      </form>
    </section>
  );
};

export default Search;
