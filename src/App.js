import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ExpenseItem />
      </header>
    </div>
  );
}

export default App;
