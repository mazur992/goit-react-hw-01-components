import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tr className={css.transactionHistory__line}>
      <td className={css.transactionHistory__item}>{type}</td>
      <td className={css.transactionHistory__item}>{amount}</td>
      <td className={css.transactionHistory__item}>{currency}</td>
    </tr>
  );
}
TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
