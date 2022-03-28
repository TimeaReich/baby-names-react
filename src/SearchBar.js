import React, { useState } from "react";
import BabyNames from "./BabyNames";

const SearchBar = (props) => {
  const [filteredNames, setFilteredNames] = useState();
  const filterNames = (e) => {
    const searchWord = e.target.value.toUpperCase();
    console.log(
      props.names.filter((item) => item.name.toUpperCase().includes(searchWord))
    );

    const filter = props.names.filter((item) => {
      return item.name.toUpperCase().includes(searchWord);
    });
    console.log(filter);
    BabyNames(filter);
  };

  //  const babyNames = props.names;
  return (
    <div>
      <input
        className="search"
        type="text"
        id="name-search"
        placeholder="Search for names..."
        onChange={filterNames}
      ></input>
    </div>
  );
};
export default SearchBar;
