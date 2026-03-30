import React, { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { motion } from "framer-motion";

const Dashboard = () => {
    const { transactions } = useContext(FinanceContext);

    const income = transactions
        .filter(t => t.type === "income")
        .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
        .filter(t => t.type === "expense")
        .reduce((acc, t) => acc + t.amount, 0);

    const recentTransactions = [...transactions].slice(-5).reverse();

    return (
        <div className="dashboard page-section">
            <div className="page-header">
                <h2>Dashboard</h2>
                <p>Track your income, expenses, and recent transaction history in one place.</p>
            </div>
            <motion.div className="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                <div className="card income">
                    <h3>Income</h3>
                    <p>₹{income.toLocaleString()}</p>
                </div>
                <div className="card expense">
                    <h3>Expense</h3>
                    <p>₹{expense.toLocaleString()}</p>
                </div>
                <div className="card balance">
                    <h3>Balance</h3>
                    <p>₹{(income - expense).toLocaleString()}</p>
                </div>
            </motion.div>

            <div className="recent-section">
                <div className="recent-header">
                    <h3>Recent Transactions</h3>
                    <p>Latest activity from your finance tracker.</p>
                </div>
                {recentTransactions.length === 0 ? (
                    <div className="empty-card">No transactions yet. Add your first transaction to see it here.</div>
                ) : (
                    <div className="recent-list">
                        {recentTransactions.map((t) => (
                            <div key={t.id} className={`transaction-card ${t.type}`}>
                                <div>
                                    <h4>{t.title}</h4>
                                    <span className="pill">{t.category}</span>
                                </div>
                                <div className="transaction-meta">
                                    <p className="amount">₹{t.amount.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;