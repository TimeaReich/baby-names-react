import babyNamesData from "./babyNamesData.json";

const BabyNames = () => {
  const babyNames = babyNamesData;

  return (
    <div>
      {babyNames.map((item) => {
        if (item.sex === "f") {
          return (
            <button className="f-button" key={item.id}>
              {item.name}
            </button>
          );
        } else if (item.sex === "m") {
          return (
            <button className="m-button" key={item.id}>
              {item.name}
            </button>
          );
        }
      })}
    </div>
  );
};
export default BabyNames;
