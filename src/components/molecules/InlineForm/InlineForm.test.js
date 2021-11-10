import React  from 'react';
import { shallow } from 'enzyme';
import InlineForm from './InlineForm';
import Button from '../../atoms/Button/Button';

describe('InlineForm', () => {
  it('Renders InlineForm', () => {
    const wrapper = shallow(<InlineForm
      method="post"
      action="#"
      placeholder="name@email.com"
      cta="Join our newsletter"
      id="search-form"
      label="Email address"
    />);
    expect(wrapper)
      .toBeDefined();
  });
  it('Displays Childrens', async () => {
    const wrapper = shallow(<InlineForm
      method="post"
      action="#"
      placeholder="name@email.com"
      cta="Join our newsletter"
      id="search-form"
      label="Email address"
    />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});

