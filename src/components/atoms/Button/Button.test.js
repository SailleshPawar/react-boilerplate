import React  from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Primary Button', () => {
  it('Handles button click', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Button onClick={mockFunction} />);
    wrapper.simulate('click');
    wrapper.update();
    expect(mockFunction).toBeCalled();
  });
});
