import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [coinValue, setCoinValue] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(
      response => response.json()
      ).then(json => 
        {setCoins(json);
          setLoading(false);
        })
  });

  const onChangeValue = (event) => {
    setValue(event.target.value);
  }

  const onChangeSelect = (event) => {
    setCoinValue(event.target.value);
    setValue(1);
  }
  return (
    <div>
      <h1>The coin!</h1>
      {loading ? <strong>Loading...</strong>:
        <div>
          <input value={value} onChange={onChangeValue} type="number" placeholder="Write the price (USD)" /><br />
          <select onChange={onChangeSelect}>
            <option>Select the Coin!</option>
            {coins.map((coin) => 
            <option key={coin.id} value={coin.quotes.USD.price} >{coin.name}</option>)}
          </select>
          <h3>You can buy {value / coinValue}</h3>
        </div>
      }
    </div>
  );
}

export default App;
