import React from "react";

const BabyNames = (props) => {
  props.filteredNames.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <div>
      {props.filteredNames.map((item, index) => {
        if (item.sex === "f") {
          return (
            <button
              onClick={() => {
                props.setSelectedButton(item);
                props.names.splice(index, 1);
                props.setFilteredNames(props.names);
              }}
              className="f-button"
              key={item.id}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <button
              onClick={() => {
                props.setSelectedButton(item);
                props.names.splice(index, 1);
                props.setFilteredNames(props.names);
              }}
              className="m-button"
              key={item.id}
            >
              {item.name}
            </button>
          );
        }
      })}
    </div>
  );
};
export default BabyNames;
