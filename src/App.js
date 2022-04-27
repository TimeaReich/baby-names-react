import "./App.css";
import BabyNames from "./BabyNames";
import SearchBar from "./SearchBar";
import babyNamesData from "./babyNamesData.json";
import React, { useState } from "react";
import Favourites from "./Favourites";
import FemaleButton from "./FemaleButton";
import MaleButton from "./MaleButton";
import AllNamesButton from "./AllNamesButton";

function App() {
  const namesData = babyNamesData;
  const [filteredNames, setFilteredNames] = useState(namesData);
  const [selectedButton, setSelectedButton] = useState([]);

  // console.log(filteredNames);
  // console.log(namesData);
  return (
    <div className="App">
      <header className="App-header">
        <div className="SearchBar-div">
          <SearchBar setFilteredNames={setFilteredNames} names={namesData} />
          <FemaleButton
            setFilteredNames={setFilteredNames}
            namesData={namesData}
          />
          <MaleButton
            setFilteredNames={setFilteredNames}
            namesData={namesData}
          />
          <AllNamesButton
            setFilteredNames={setFilteredNames}
            namesData={namesData}
          />
        </div>
        <Favourites names={namesData} selectedButton={selectedButton} />
        <BabyNames
          setSelectedButton={setSelectedButton}
          names={namesData}
          filteredNames={filteredNames}
          setFilteredNames={setFilteredNames}
        />
      </header>
    </div>
  );
}

export default App;
