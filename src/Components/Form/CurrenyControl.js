import Select from "./Select";
import { MdLoop } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { getCurrencies } from "../../store/CurrencySlice";
import { useSelector, useDispatch } from "react-redux";
import {
  setAmount,
  setResult,
  setFromCurreny,
  setToCurrency,
  setButtonDisabled,
} from "../../store/CurrencySlice";
import { useEffect } from "react";

const CurrenyControl = (props) => {
  const { fromParam } = useParams();

  const {
    currencyRates,
    currencyOptions,
    amount,
    result,
    fromCurreny,
    toCurrency,
    buttonDisabled,
  } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  const amountHandler = (e) => {
    dispatch(setResult(""));
    const amountValue = e.target.value;
    dispatch(setAmount(amountValue));
    if (amountValue > 0) {
      dispatch(setButtonDisabled(false));
    } else {
      dispatch(setButtonDisabled(true));
    }
  };

  const fromSelectionHandler = (e) => {
    const fromSelectionValue = e.target.value;
    dispatch(setFromCurreny(fromSelectionValue));
    dispatch(setResult(""));
  };
  const toSelectionHandler = (e) => {
    const toSelectionValue = e.target.value;
    dispatch(setToCurrency(toSelectionValue));
    dispatch(setResult(""));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let convesionResult =
      (amount * currencyRates[toCurrency]) / currencyRates[fromCurreny];
    dispatch(setResult(convesionResult.toFixed(3)));
  };

  const swapHandler = () => {
    dispatch(setToCurrency(fromCurreny));
    dispatch(setFromCurreny(toCurrency));
    let convesionResult =
      (amount * currencyRates[fromCurreny]) / currencyRates[toCurrency];
    dispatch(setResult(convesionResult.toFixed(3)));
    console.log(convesionResult);
  };

  return (
    <div className="currency-Control--card">
      <form className="curreny-form" onSubmit={submitHandler}>
        <div className="curreny-form-upper">
          <div className="input-row">
            <label>Amount</label>
            <input type="text" value={amount} onChange={amountHandler} />
          </div>
          <div className="input-row">
            <label>From</label>
            <Select
              selectOptions={currencyOptions}
              onChange={fromSelectionHandler}
              value={fromCurreny}
              disabled={fromParam ? true : false}
            />
          </div>

          <div className="input-row">
            <button
              disabled={fromParam ? true : false}
              className={fromParam ? "disabled" : ""}
              onClick={swapHandler}
            >
              <MdLoop className="swap-icon" />
            </button>
          </div>

          <div className="input-row">
            <label>To</label>
            <Select
              value={toCurrency}
              selectOptions={currencyOptions}
              onChange={toSelectionHandler}
            />
          </div>
        </div>
        <div className="curreny-form-lower ">
          {result > 0 ? (
            <h3>
              {result}
              <span>{toCurrency}</span>
            </h3>
          ) : (
            <p>Convert To Show Result</p>
          )}

          {props.defaultEnabled ? (
            <Link to={`/details/${fromCurreny}`}>Details</Link>
          ) : null}

          <button
            type="submit"
            className={buttonDisabled ? "disable" : ""}
            disabled={buttonDisabled}
          >
            Convert
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrenyControl;
