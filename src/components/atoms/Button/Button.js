import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
  const btnClass = classnames('c-btn', props.className, {
    'c-btn--secondary': props.issecondary
  });

  return (
    <button
      className={ btnClass }
      disabled={ props.disabled }
      {...props}
    >
      {props.text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  btnClass: PropTypes.string,
  issecondary: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.any
};

Button.defaultProps = {
  disabled: false,
  text: 'Button'
};
