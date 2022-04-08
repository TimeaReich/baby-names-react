import React, { useEffect, useState } from "react";

const Favourites = (props) => {
  const [favname, setFavName] = useState([]);

  useEffect(() => {
    setFavName(favname.concat(props.selectedButton));
  }, [props.selectedButton]);

  return (
    <div className="favourites">
      <p>Favourites: </p>
      {favname.length > 1
        ? favname.map((item) => {
            return item.sex === "f" ? (
              <button className="f-button" key={item.id}>
                {item.name}
              </button>
            ) : (
              <button className="m-button" key={item.id}>
                {item.name}
              </button>
            );
          })
        : ""}
    </div>
  );
};
export default Favourites;
