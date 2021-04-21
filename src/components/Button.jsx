/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => (
  <button type="button" className="button" onClick={() => { clickHandler(name); }}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
