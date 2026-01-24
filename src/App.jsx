import { useState } from "react";
import Balance from "./components/Balance";
import Summary from "./components/Summary";
import ExpenseForm from "./components/ExpenseForm";
import TransactionList from "./components/TransactionList";
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <Balance transactions={transactions} />
      <Summary transactions={transactions} />
      <ExpenseForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
