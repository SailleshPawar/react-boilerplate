import React  from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('Renders Card', () => {
    const wrapper = shallow(<Card/>);
    expect(wrapper)
      .toBeDefined();
  });
});
