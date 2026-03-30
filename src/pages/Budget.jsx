import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const Budget = () => {
    const { budget, setBudget, transactions } = useContext(FinanceContext);

    const totalExpense = transactions
        .filter(t => t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0);

    return (
        <div>
            <div className="page-header">
                <h2>Budget</h2>
                <p>Set your target and keep an eye on how much is left.</p>
            </div>
            <div className="budget-card">
                <label>
                    <span>Monthly Budget</span>
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                </label>

                <div className="budget-summary">
                    <div>
                        <strong>Total Spent</strong>
                        <p>₹{totalExpense.toLocaleString()}</p>
                    </div>
                    <div>
                        <strong>Remaining</strong>
                        <p>₹{(budget - totalExpense).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budget;