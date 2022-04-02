import "./App.css";
import BabyNames from "./BabyNames";
import SearchBar from "./SearchBar";
import babyNamesData from "./babyNamesData.json";
import React, { useState } from "react";

function App() {
  const namesData = babyNamesData;
  const [filteredNames, setFilteredNames] = useState(namesData);
  console.log(filteredNames);
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar
          filteredNames={filteredNames}
          setFilteredNames={setFilteredNames}
          names={namesData}
        />
        <BabyNames names={filteredNames} />
      </header>
    </div>
  );
}

export default App;
