import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import Charts from "../components/Charts";

const Analytics = () => {
    const { transactions } = useContext(FinanceContext);

    const totalIncome = transactions
        .filter(t => t.type === "income")
        .reduce((acc, t) => acc + t.amount, 0);

    const totalExpense = transactions
        .filter(t => t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0);

    const netBalance = totalIncome - totalExpense;
    const latestTransaction = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    const data = [
        { name: "Income", value: transactions.filter(t => t.type === "income").length },
        { name: "Expense", value: transactions.filter(t => t.type === "expense").length },
    ];

    return (
        <div>
            <div className="page-header">
                <h2>Analytics</h2>
                <p>Understand your spending patterns with clear totals and a visual breakdown of income vs expense.</p>
            </div>

            <div className="analytics-grid">
                <div className="analytics-card income-card">
                    <strong>Total Income</strong>
                    <p>₹{totalIncome.toLocaleString()}</p>
                </div>
                <div className="analytics-card expense-card">
                    <strong>Total Expense</strong>
                    <p>₹{totalExpense.toLocaleString()}</p>
                </div>
                <div className="analytics-card balance-card">
                    <strong>Net Balance</strong>
                    <p>₹{netBalance.toLocaleString()}</p>
                </div>
                <div className="analytics-card latest-card">
                    <strong>Latest Transaction</strong>
                    <p>{latestTransaction ? `${latestTransaction.title} on ${latestTransaction.date}` : "No transactions yet"}</p>
                </div>
            </div>

            <div className="analytics-summary">
                <div className="chart-wrapper">
                    <Charts data={data} />
                </div>
                <div className="chart-legend">
                    <div className="legend-item income-legend">
                        <span />
                        <p>Income entries</p>
                    </div>
                    <div className="legend-item expense-legend">
                        <span />
                        <p>Expense entries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;