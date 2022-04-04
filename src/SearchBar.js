import React from "react";

const SearchBar = (props) => {
  const setFilteredNames = props.setFilteredNames;

  const filterNames = (e) => {
    setFilteredNames(() => {
      const searchWord = e.target.value.toUpperCase();

      const filter = props.names.filter((item) => {
        return item.name.toUpperCase().includes(searchWord);
      });
      return filter;
    });
  };

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
