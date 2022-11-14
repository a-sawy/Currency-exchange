import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { historicalRates } from "./historicalAPI";

export const getCurrencies = createAsyncThunk(
  "currency/getCurrencies",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://api.exchangerate.host/latest");
      const data = await res.json();
      const rates = data.rates;

      return rates;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  currencyRates: [],
  currencyOptions: [],
  amount: "00:00",
  result: 0,
  fromCurreny: "USD",
  toCurrency: "EUR",
  buttonDisabled: true,
  lastDayInfo: {},
  lastMonthInfo: {},
  lastYearInfo: {},
  historicalDayValue: null,
  historicalMonthValue: null,
  historicalYearValue: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setFromCurreny: (state, action) => {
      state.fromCurreny = action.payload;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
    setButtonDisabled: (state, action) => {
      state.buttonDisabled = action.payload;
    },
    setHistoricalDayValue: (state, action) => {
      state.historicalDayValue = action.payload;
    },
    setHistoricalMonthValue: (state, action) => {
      state.historicalDayValue = action.payload;
    },
    setHistoricalYearValue: (state, action) => {
      state.historicalDayValue = action.payload;
    },
  },

  extraReducers: {
    [getCurrencies.pending]: (state, action) => {},
    [getCurrencies.fulfilled]: (state, action) => {
      state.currencyRates = action.payload;
      state.currencyOptions = Object.keys(state.currencyRates);
    },
    [getCurrencies.rejected]: (state, action) => {},

    // historical call

    [historicalRates.pending]: (state, action) => {},
    [historicalRates.fulfilled]: (state, action) => {
      state.lastDayInfo = action.payload.lastDayData.quotes;
      state.lastMonthInfo = action.payload.lastMonthData.quotes;
      state.lastYearInfo = action.payload.lastYearData.quotes;
    },
    [historicalRates.rejected]: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  setAmount,
  setResult,
  setFromCurreny,
  setToCurrency,
  setButtonDisabled,
} = currencySlice.actions;

export default currencySlice.reducer;
