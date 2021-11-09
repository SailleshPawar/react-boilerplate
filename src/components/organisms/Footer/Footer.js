import React  from 'react';
import  InlineForm  from '../../molecules/InlineForm/InlineForm';
import globals from '../../../utils/data/globals.json';

const Footer = (props) => {
  return (
    <footer className="c-footer" {...props}>
      <InlineForm
        method="post"
        action="#"
        placeholder="name@email.com"
        cta="Join our newsletter"
        id="search-form"
        label="Email address"
      />

      <p className="c-footer__copyright">&copy; { (new Date()).getFullYear() } { globals.company.name }</p>
    </footer>
  );
};

export default Footer;

