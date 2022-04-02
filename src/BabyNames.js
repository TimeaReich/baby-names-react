const BabyNames = (props) => {
  const babyNames = props.names;
  const filteredNames=props.setFilteredNames
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
            <button className="f-button" key={item.id}>
              {item.name}
            </button>
          );
        } else {
          return (
            <button className="m-button" key={item.id}>
              {item.name}
            </button>
          );
        }
      })}
      ;
    </div>
  );
};
export default BabyNames;
