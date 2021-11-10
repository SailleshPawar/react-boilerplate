import React  from 'react';
import { shallow } from 'enzyme';
import PrimaryNav from './PrimaryNav';

describe('PrimaryNav', () => {
  it('Renders PrimaryNav', () => {
    const wrapper = shallow(<PrimaryNav
      listItems={[
        {
          href: '#',
          text: 'Nav Item 1'
        },
        {
          href: '#',
          text: 'Nav Item 2'
        },
        {
          href: '#',
          text: 'Nav Item 3'
        },
        {
          href: '#',
          text: 'Nav Item 4'
        }
      ]}
    />);
    expect(wrapper)
      .toBeDefined();
  });
});
