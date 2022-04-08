import "./App.css";
import BabyNames from "./BabyNames";
import SearchBar from "./SearchBar";
import babyNamesData from "./babyNamesData.json";
import React, { useState } from "react";
import Favourites from "./Favourites";

function App() {
  const namesData = babyNamesData;
  const [filteredNames, setFilteredNames] = useState(namesData);
  const [selectedButton, setSelectedButton] = useState("");

  console.log(selectedButton);
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setFilteredNames={setFilteredNames} names={namesData} />
        <Favourites names={namesData} selectedButton={selectedButton} />
        <BabyNames
          setSelectedButton={setSelectedButton}
          names={filteredNames}
        />
      </header>
    </div>
  );
}

export default App;
