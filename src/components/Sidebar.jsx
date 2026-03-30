import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaList, FaPlus, FaChartPie, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
    const activeClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

    return (
        <motion.div
            className="sidebar"
            initial={{ x: -220 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="sidebar-brand">
                <h2 className="logo">FinTrack</h2>
                <p>Bright, modern finance tracking</p>
            </div>

            <NavLink to="/" end className={activeClass}> <FaHome /> Dashboard </NavLink>
            <NavLink to="/transactions" className={activeClass}> <FaList /> Transactions </NavLink>
            <NavLink to="/transactions/new" className={activeClass}> <FaPlus /> Add Transaction </NavLink>
            <NavLink to="/budget" className={activeClass}> <FaWallet /> Budget </NavLink>
            <NavLink to="/analytics" className={activeClass}> <FaChartPie /> Analytics </NavLink>
        </motion.div>
    );
};

export default Sidebar;