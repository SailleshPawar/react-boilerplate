import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';

const InlineForm = (props) => {
  return (
    <form
      className="c-inline-form"
      method={props.method}
      action={props.action}
    >
      <label htmlFor={ props.id } className="c-inline-form__label u-is-vishidden">{ props.label}</label>
      <input
        id={ props.id }
        className="c-inline-form__input"
        placeholder={ props.placeholder}
      />
      <Button text={ props.cta} />
    </form>
  );
};

export default InlineForm;

InlineForm.propTypes = {
  method: PropTypes.oneOf(['get', 'post']).isRequired,
  action: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  cta: PropTypes.string
};
