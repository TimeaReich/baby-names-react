import React, { useEffect, useState } from "react";

const Favourites = (props) => {
  const [favname, setFavName] = useState([]);

  useEffect(() => {
    setFavName(favname.concat(props.selectedButton));
  }, [props.selectedButton]);

  return (
    <div className="favourites">
      <p>Favourites: </p>
      {favname.map((item) => {
        return item.sex === "f" ? (
          <button key={item.id} className="f-button">
            {item.name}
          </button>
        ) : (
          <button key={item.id} className="m-button">
            {item.name}
          </button>
        );
      })}
    </div>
  );
};
export default Favourites;
