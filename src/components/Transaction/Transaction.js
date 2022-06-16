import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ data }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({ id, amount, type, currency }, index) => {
          let bgColor = index % 2 === 0 ? s.light : s.dark;
          return (
            <tr key={id} className={`${s.row} ${bgColor}`}>
              <td className={s.test}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};