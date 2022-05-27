import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h2 className="title">{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;