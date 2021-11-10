import React  from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('Section', () => {
  it('Renders Section', () => {
    const wrapper = shallow(<Section/>);
    expect(wrapper).toBeDefined();
  });
});
