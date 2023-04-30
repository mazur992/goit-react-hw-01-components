import PropTypes from 'prop-types';

import css from './StatisticsCard.module.css';

export default function StatisticsCard({ label, percentage }) {
  return (
    <li
      className={css.statistics__item}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`,
      }}
    >
      <span className={css.statistics__label}>{label}</span>
      <span className={css.statistics__percentage}>{percentage}%</span>
    </li>
  );
}
StatisticsCard.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
