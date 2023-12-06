import { useState } from "react";
import "./App.css";

function App() {
  let [current, setCurrent] = useState(10);

  const handleAdd = () => {
    if (current < 20) {
      setCurrent((current += 1));
    } else {
      alert("Value can't exceed 20");
    }
  };
  const handleSub = () => {
    if (current > 0) {
      setCurrent((current -= 1));
    } else {
      alert("Value can't less than 0");
    }
  };
  return (
    <>
      <div className="app">
        <h2 className="content">{current}</h2>
        <br />
        <br />
        <br />
        <div className="buttons">
          <button className="btn" onClick={handleAdd}>
            Add By 1
          </button>
          <button className="btn" onClick={handleSub}>
            Remove By 1
          </button>
        </div>
        <div className="note">
          <p>
            Note : Value {`can't`} be greater than 20 or less than 20. If value
            is already 20 you {`can't`} add it more or if value is already 0 you
            {`can't`} Subtract possibly you take an alert!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
