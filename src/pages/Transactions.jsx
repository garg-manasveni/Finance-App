import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FinanceContext } from "../context/FinanceContext";

const Transactions = () => {
    const { transactions, deleteTransaction } = useContext(FinanceContext);

    return (
        <div className="page-section">
            <div className="page-header">
                <h2>Transactions</h2>
                <p>Review all income and expense records at a glance.</p>
            </div>

            <div className="transaction-list">
                {transactions.length === 0 ? (
                    <motion.div
                        className="empty-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        No transactions yet. Add one to start tracking your money.
                    </motion.div>
                ) : (
                    transactions.map((t) => (
                        <motion.div
                            key={t.id}
                            className={`transaction-card ${t.type}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.15 }}
                        >
                            <div className="transaction-details">
                                <h4>{t.title}</h4>
                                <span className="pill">{t.category}</span>
                            </div>
                            <div className="transaction-meta">
                                <p className="amount">₹{t.amount.toLocaleString()}</p>
                                <button className="delete-button" onClick={() => deleteTransaction(t.id)}>
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Transactions;