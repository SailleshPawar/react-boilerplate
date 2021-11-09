import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {
  return (
    <div className="c-hero" { ...props }>
      <img className="c-hero__img" src={ props.heroimgsrc } alt={ props.heroimgalt } />
      <div className="c-hero__body">
        <h2 className="c-hero__title">{ props.title }</h2>
        <p className="c-hero__description">{ props.description }</p>
      </div>
    </div>
  );
};
export default Hero;

Hero.propTypes = {
  heroimgsrc: PropTypes.string.isRequired,
  heroimgalt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

Hero.defaultProps = {
  heroimgsrc: '../../images/fpo-1200x650.png',
  title: 'Hero Title',
  description: 'This is the hero description'
};

