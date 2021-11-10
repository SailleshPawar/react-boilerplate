import React  from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import Card from '../../atoms/Card/Card';

describe('CardList', () => {
  it('Renders CardList', () => {
    const wrapper = shallow(<CardList/>);
    expect(wrapper)
      .toBeDefined();
  });
  it('Displays cards in cardList', async () => {
    const wrapper = shallow(<CardList/>);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});

