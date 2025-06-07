import React from "react";
import "./InputBox.css";
function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrChange,
  currOptions = [],
  selectCurr,
  amountDisable = false,
}) {
  return (
    <div className="input-box">
      <div className="input">
        <label>{label}</label>
        <input
          type="number"
          placeholder="0"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="cur-type">
        <label>Currency Type</label>
        <select
          value={selectCurr}
          onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
        >
          {currOptions.map((cur) => {
            return <option key={cur}>{cur}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
