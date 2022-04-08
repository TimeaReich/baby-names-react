import React from "react";

const BabyNames = (props) => {
  const babyNames = props.names;

  babyNames.sort((a, b) => {
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
      {babyNames.map((item) => {
        if (item.sex === "f") {
          return (
            <button
              onClick={() => props.setSelectedButton(item)}
              className="f-button"
              key={item.id}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <button
              onClick={() => props.setSelectedButton(item)}
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
