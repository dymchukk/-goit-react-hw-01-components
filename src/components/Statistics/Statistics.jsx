import PropTypes from 'prop-types';

const Statistics = props => {
  const { label, percent } = props;
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percent}</span>
    </li>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Statistics;

