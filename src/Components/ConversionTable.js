import React from "react";
import QuickConversion from "./QuickConversion";
import { useSelector } from "react-redux";

const ConversionTable = () => {
  const { fromCurreny, toCurrency } = useSelector((state) => state.currency);
  return (
    <div className="conversion-table">
      <QuickConversion fromCurreny={fromCurreny} toCurrency={toCurrency} />
      <QuickConversion fromCurreny={toCurrency} toCurrency={fromCurreny} />
    </div>
  );
};

export default ConversionTable;
