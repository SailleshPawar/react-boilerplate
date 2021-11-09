import React from 'react';
import {shallow} from 'enzyme';
import TextPassage from './TextPassage';

describe('TextPassage', () => {
  it('Renders TextPassage', () => {
    const wrapper = shallow(<TextPassage />);
    expect(wrapper)
      .toBeDefined();
  });
});
