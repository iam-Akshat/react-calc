import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    {result}
  </div>
);
export default Display;

Display.defaultProps = {
  result: '0',
};
Display.propTypes = {
  result: PropTypes.string,
};
