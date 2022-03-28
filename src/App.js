import "./App.css";
import BabyNames from "./BabyNames";
import SearchBar from "./SearchBar";
import babyNamesData from "./babyNamesData.json";

function App() {
  const namesData = babyNamesData;
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar names={namesData} />
        <BabyNames names={namesData} />
      </header>
    </div>
  );
}

export default App;
