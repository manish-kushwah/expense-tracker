import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((t) => t.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = Math.abs(
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, item) => (acc += item), 0)
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">&#8377;{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">&#8377;{expense}</p>
      </div>
    </div>
  );
};
