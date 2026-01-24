const Balance = ({ transactions }) => {
  const total = transactions.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </div>
  );
};

export default Balance;
