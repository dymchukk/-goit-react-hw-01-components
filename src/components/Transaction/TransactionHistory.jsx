import Transaction from './Transaction';

const TransactionHistory = ({ transactionsList }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionsList.map(t => (
          <Transaction
            key={t.id}
            type={t.type}
            amount={t.amount}
            currency={t.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;