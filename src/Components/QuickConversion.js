import React from "react";
import { useSelector } from "react-redux";

const QuickConversion = ({ fromCurreny, toCurrency }) => {
  const { currencyRates } = useSelector((state) => state.currency);
  const staticCurrencyValues = [1, 10, 50, 100, 500, 1000, 5000];

  const covertedList = staticCurrencyValues.map((el) => {
    return (
      (el * currencyRates[toCurrency]) /
      currencyRates[fromCurreny]
    ).toFixed(2);
  });

  return (
    <div className="quick-conversion-container">
      <h2 className="quick-conversion-title">{`convert from ${fromCurreny} to ${toCurrency}`}</h2>
      <div className="conversion-coulmn">
        <h4>{fromCurreny}</h4>
        <ul>
          {staticCurrencyValues.map((el) => {
            return (
              <li key={el}>
                {el}
                <span>{fromCurreny}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="conversion-coulmn">
        <h4>{toCurrency}</h4>
        <ul>
          {covertedList.map((el) => {
            return (
              <li>
                {el} <span>{toCurrency}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuickConversion;
