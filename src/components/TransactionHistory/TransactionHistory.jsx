import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

export const TransactionHistory = ({items}) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      
      <tbody>
        {items.map(({id, type, amount,  currency}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table> 
  )
}

TransactionHistory.propTypes = {
  stats:propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired
  }))
}