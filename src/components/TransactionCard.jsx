import React from "react";
import { motion } from "framer-motion";

const TransactionCard = ({ t, onDelete }) => {
    return (
        <motion.div className="transaction-card" whileHover={{ scale: 1.05 }}>
            <h4>{t.title}</h4>
            <p>{t.category}</p>
            <p>₹{t.amount}</p>
            <button onClick={() => onDelete(t.id)}>Delete</button>
        </motion.div>
    );
};

export default TransactionCard;