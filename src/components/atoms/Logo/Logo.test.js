import React from 'react';
import {shallow} from 'enzyme';
import Logo from './Logo';

describe('Logo', () => {
  it('Renders Logo', () => {
    const wrapper = shallow(<Logo src={'../../images/fpo-1200x650.png'} alt={'img'} />);
    expect(wrapper)
      .toBeDefined();
  });
});
