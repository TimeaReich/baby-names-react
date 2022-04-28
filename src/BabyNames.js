import React from "react";

const BabyNames = (props) => {
  const onClickDelete = (item, index) => {
    props.setSelectedButton(item);
    const filteredBabyNames = props.filteredNames.filter(
      (item, i) => i !== index
    );
    props.setFilteredNames(filteredBabyNames);
  };

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
              onClick={onClickDelete.bind(null, item, index)}
              className="f-button"
              key={item.id}
            >
              {item.name}
            </button>
          );
        } else {
          return (
            <button
              onClick={onClickDelete.bind(null, item, index)}
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
