import React from "react";

const BabyNames = (props) => {
  console.log(props.names);
  props.names.sort((a, b) => {
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
      {props.names.map((item, index) => {
        if (item.sex === "f") {
          return (
            <button
              onClick={() => {
                props.setSelectedButton(item);
                props.setFilteredNames(props.names.splice(index, 1));
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
                props.setFilteredNames(props.names.splice(index, 1));
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
