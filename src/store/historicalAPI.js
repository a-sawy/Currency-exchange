import { createAsyncThunk } from "@reduxjs/toolkit";

export const historicalRates = createAsyncThunk(
  "currency/fetchHistorical",
  async (
    { fromCurreny, toCurrency, lastDayDate, lastMonthDate, lastYearDate },
    thunkAPI
  ) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "TEzEEOBbZ7abzTvvrW4w5NfVaQu2wfl");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };

      let lastDayRes = await fetch(
        `https://api.apilayer.com/currency_data/historical?date=${lastDayDate}&source=${fromCurreny}&currencies=${toCurrency}`,
        requestOptions
      );
      let lastMonthRes = await fetch(
        `https://api.apilayer.com/currency_data/historical?date=${lastMonthDate}&source=${fromCurreny}&currencies=${toCurrency}`,
        requestOptions
      );
      let lastYearRes = await fetch(
        `https://api.apilayer.com/currency_data/historical?date=${lastYearDate}&source=${fromCurreny}&currencies=${toCurrency}`,
        requestOptions
      );

      const lastDayData = await lastDayRes.json();
      const lastMonthData = await lastMonthRes.json();
      const lastYearData = await lastYearRes.json();

      return { lastDayData, lastMonthData, lastYearData };

      // Promise.all([lastDayRes, lastMonthRes, lastYearRes]).then((ress) => {
      //   ress.forEach((res) => {
      //     process(res.json());
      //   });
      // });
    } catch (error) {
      console.log(error);
    }
  }
);
