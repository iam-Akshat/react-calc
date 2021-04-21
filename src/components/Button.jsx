/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler, specialClassNames }) => (
  <button type="button" className={`button ${specialClassNames}`} onClick={() => { clickHandler(name); }}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
