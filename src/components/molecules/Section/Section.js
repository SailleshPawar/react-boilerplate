import React  from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <section className="c-section">
      <header className="c-section__header">
        <h2 className="c-section__title">{ props.title }</h2>
        <p className="c-section__description">{ props.description }</p>
      </header>
      <div className="c-section__body">
        { props.children }
      </div>
    </section>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};
