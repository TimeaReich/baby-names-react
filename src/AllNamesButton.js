import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const AllNamesButton = (props) => {
  const filterGender = () => {
    props.setFilteredNames(props.namesData);
  };
  return (
    <div>
      <button className="allnames-button" onClick={filterGender}>
        <FontAwesomeIcon icon={faPaw} />
      </button>
    </div>
  );
};
export default AllNamesButton;
