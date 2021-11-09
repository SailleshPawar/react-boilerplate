import React  from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Hero', () => {
  it('Renders Hero', () => {
    const wrapper = shallow(<Hero heroimgsrc={'../../images/fpo-1200x650.png'} heroimgalt={'img'} />);
    expect(wrapper)
      .toBeDefined();
  });
});
