import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export default function TransactionHistory({ props: items }) {
  return (
    <table className={style.th}>
      <thead className={style.th__thead}>
        <tr className={style.th__tr__head}>
          <th className={style.th__th}>Type</th>
          <th className={style.th__th}>Amount</th>
          <th className={style.th__th}>Currency</th>
        </tr>
      </thead>
      <tbody className={style.th__tbody}>
        {items.map(elem => {
          return (
            <tr
              className={style.th__tr__bottom}
              key={elem.id}
            >
              <td className={style.th__td}>{elem.type}</td>
              <td className={style.th__td}>{elem.amount}</td>
              <td className={style.th__td}>
                {elem.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    }),
  ),
};