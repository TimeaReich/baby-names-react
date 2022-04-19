import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const FemaleButton = (props) => {
  const filterGender = () => {
    props.setFilteredNames(() => {
      let filter = props.namesData.filter((item) => {
        return item.sex === "f";
      });
      return filter;
    });
  };
  return (
    <div>
      <button className="f-button" onClick={filterGender}>
        <FontAwesomeIcon icon={faCat} />
      </button>
    </div>
  );
};
export default FemaleButton;
