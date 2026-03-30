import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [budget, setBudget] = useState(50000);

    const addTransaction = (data) => {
        setTransactions([...transactions, { ...data, id: uuidv4() }]);
    };

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter((t) => t.id !== id));
    };

    return (
        <FinanceContext.Provider
            value={{ transactions, addTransaction, deleteTransaction, budget, setBudget }}
        >
            {children}
        </FinanceContext.Provider>
    );
};