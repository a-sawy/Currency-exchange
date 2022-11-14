import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrenyControl from "../Components/Form/CurrenyControl";
import Banner from "../Components/UI/Banner";
import { historicalRates } from "../store/historicalAPI";

const Details = () => {

  const { fromCurreny, toCurrency, lastDayInfo, lastMonthInfo, lastYearInfo } =
    useSelector((state) => state.currency);

  const dispatch = useDispatch();
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const lastDayDate = date.toISOString().split("T")[0];

  date.setDate(date.getDate() - 30);
  const lastMonthDate = date.toISOString().split("T")[0]; // date format "2016-06-08"

  date.setDate(date.getDate() - 365);
  const lastYearDate = date.toISOString().split("T")[0];

  useEffect(() => {
    const HistoricalBody = {
      fromCurreny,
      toCurrency,
      lastDayDate,
      lastMonthDate,
      lastYearDate,
    };

    dispatch(historicalRates(HistoricalBody));
  }, [dispatch]);

  console.log(lastDayInfo);
  console.log(lastMonthInfo);
  console.log(lastYearInfo);

  return (
    <>
      <Banner />
      <CurrenyControl defaultEnabled={false}  />
    </>
  );
};

export default Details;
