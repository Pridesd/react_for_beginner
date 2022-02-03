import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  function onChange(event) {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == "")return;
    else{
      setToDos((currentArray) => [...currentArray, toDo]);
      setToDo("");
    }
  }
  return (
    <div>
      <h1>My to dos {toDos.length} </h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your todo..." />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => 
        <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
