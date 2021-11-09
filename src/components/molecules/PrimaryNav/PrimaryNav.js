import React from 'react';
import PropTypes from 'prop-types';

const PrimaryNav = (props) => {
  return (
    <nav className="c-primary-nav { props.styleModifier }">
      <ul className="c-primary-nav__list">
        {props.listItems.map((listItem, index) => {
          return <li className="c-primary-nav__item" key={`c-primary-nav__item-${index}`}>
            <a href={ listItem.href }>
              { listItem.text }
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
};
export default PrimaryNav;

PrimaryNav.propTypes = {
  listItems: PropTypes.array.isRequired,
  href: PropTypes.string,
  text: PropTypes.string
};

