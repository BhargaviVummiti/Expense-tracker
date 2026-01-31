const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul className="list">
      {transactions.map(item => (
        <li key={item.id} className={item.amount > 0 ? "plus" : "minus"}>
          {item.text} 
          <span>₹{item.amount}</span>
          <button onClick={() => deleteTransaction(item.id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
