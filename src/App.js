import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logIn } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>Counter : {counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div onClick={() => dispatch(logIn())}>
        isLogged : {isLogged.toString()}
      </div>
    </div>
  );
}

export default App;
