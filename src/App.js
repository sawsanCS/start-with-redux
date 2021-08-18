import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <div>Counter : {counter}</div>
      <button>+</button>
      <button>-</button>
      <div>isLogged : {isLogged.toString()}</div>
    </div>
  );
}

export default App;
