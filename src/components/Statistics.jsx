import PropTypes from 'prop-types';

export default function Statistic({ id, label, percentage }) {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}
Statistic.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
