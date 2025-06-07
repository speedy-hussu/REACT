import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrenInfo";
import { useState } from "react";
import "./App.css";
function App() {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  return (
    <div className="container">
      <InputBox
        amount={amount}
        label="From"
        onCurrChange={(e) => {
          setFrom(e);
        }}
        onAmountChange={(e) => {
          setAmount(e);
        }}
        selectCurr={from}
        currOptions={options}
      />
      <button className="swap" onClick={swap}>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z"/></svg>
      </button>
      <InputBox
        amount={convertedAmount}
        label="To"
        selectCurr={to}
        currOptions={options}
        amountDisable={true}
        onCurrChange={(e) => setTo(e)}
      />
      <button className="btn" onClick={convert}>
        CONVERT {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
