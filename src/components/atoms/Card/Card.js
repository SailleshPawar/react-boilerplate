import React  from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Card = (props) => {
  const cardClass = classnames({
    'c-card': true,
    'c-card--dark': props.theme === 'dark'
  });

  return (
    <div className={cardClass}>
      <header className="c-card__header">
        <h3 className="c-card__title">{props.title}</h3>
        <p className="c-card__description">
          {props.description}
        </p>
      </header>
      <div className="c-card__body">{props.children}</div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.any
};

Card.defaultProps = {
  title: 'Card Title',
  description: 'This is the card description'
};
