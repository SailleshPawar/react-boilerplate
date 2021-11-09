import React from 'react';
import PropTypes from 'prop-types';

const TextPassage = (props) => {
  return (
    <div className="c-text-passage">
      { props.children }
    </div>
  );
};
export default TextPassage;

TextPassage.propTypes = {
  children: PropTypes.node
};
