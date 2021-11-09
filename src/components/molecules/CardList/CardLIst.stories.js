import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import CardList from './CardList';

const stories = storiesOf('Lists & Collections/CardList', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <CardList listItems={[
    {
      title: 'Squeeze Its',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Card Title',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Hugs',
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      href: 'https://google.com',
      title: 'Mondo',
      description: 'Lorem ipsum dolor sit amet.'
    }
  ]} />);
