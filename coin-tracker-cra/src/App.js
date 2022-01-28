import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState();
  const [change, setChange] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (value === "") {
      return;
    }
    setChange(value);
    console.log(change);
    setValue("");
  }
  return (
    <>
      <h1 className={styles.h1}>
        The Coins! {loading ? "" : `(${coins.length})`}
      </h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={value}
          placeholder="write your money"
          text="number"
          onChange={handleInputChange}
        ></input>
      </form>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select className={styles.select}>
          {coins.map((coin) => (
            <option>
              {coin.name}({coin.symbol}):{" "}
              {change === 0
                ? `${coin.quotes.USD.price} USD`
                : change / coin.quotes.USD.price + ` btc`}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default App;
