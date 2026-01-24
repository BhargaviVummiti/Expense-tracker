const Summary = ({ transactions }) => {
  const income = transactions
    .filter(item => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);

  const expense = transactions
    .filter(item => item.amount < 0)
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <div className="summary">
      <div>
        <h4>Income</h4>
        <p className="money plus">₹{income}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">₹{Math.abs(expense)}</p>
      </div>
    </div>
  );
};

export default Summary;
