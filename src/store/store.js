import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../store/CurrencySlice";
import userReducer from "../store/AuthSlice";
import { userLogin } from "./userActions";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ["user/login/fulfilled", "userLogin.fulfilled"],
  //     },
  //   }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: userLogin,
      },
      serializableCheck: false,
    }),
});
