import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const MaleButton = (props) => {
  const filterGender = () => {
    props.setFilteredNames(() => {
      let filter = props.namesData.filter((item) => {
        return item.sex === "m";
      });
      return filter;
    });
  };

  return (
    <div>
      <button className="m-button" onClick={filterGender}>
        <FontAwesomeIcon icon={faDog} />
      </button>
    </div>
  );
};
export default MaleButton;
