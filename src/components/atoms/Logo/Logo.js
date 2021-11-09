import React from 'react';
import PropTypes from 'prop-types';

const Logo = (props) => {
  return (
    <a href={ props.href } className="c-logo" rel="home" { ...props }>
      <img className="c-logo__img" src={ props.src } alt={ props.alt } />
    </a>
  );
};
export default Logo;

Logo.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
