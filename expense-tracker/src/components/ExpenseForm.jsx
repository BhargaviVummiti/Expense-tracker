import { useState } from "react";

const ExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: Number(amount)
    };

    addTransaction(newTransaction);

    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Enter amount (+income, -expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
