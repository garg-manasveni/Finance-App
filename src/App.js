import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AddTransaction from "./pages/AddTransaction";
import Budget from "./pages/Budget";
import Analytics from "./pages/Analytics";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "transactions", label: "Transactions" },
    { id: "add-transaction", label: "Add Transaction" },
    { id: "budget", label: "Budget" },
    { id: "analytics", label: "Analytics" },
  ];

  return (
    <div className="app">
      <header className="top-nav">
          <div className="nav-brand">
            <h1>FinTrack</h1>
            <p>Simple dashboard for finance tracking</p>
          </div>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="main-content">
          <section id="dashboard" className="page-section"><Dashboard /></section>
          <section id="transactions" className="page-section"><Transactions /></section>
          <section id="add-transaction" className="page-section"><AddTransaction /></section>
          <section id="budget" className="page-section"><Budget /></section>
          <section id="analytics" className="page-section"><Analytics /></section>
        </main>
    </div>
  );
}

export default App;