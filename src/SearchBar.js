import React from "react";

const SearchBar = (props) => {
  const filteredNames = props.filteredNames;
  const setFilteredNames = props.setFilteredNames;
  console.log(filteredNames);
  const filterNames = (e) => {
    setFilteredNames(() => {
      const searchWord = e.target.value.toUpperCase();
      const filter = filteredNames.filter((item) => {
        return item.name.toUpperCase().includes(searchWord);
      });
      console.log(filter);
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
