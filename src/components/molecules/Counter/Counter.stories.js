import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import Counter from './Counter';

const stories = storiesOf('Text/TextPassage', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Counter/>);
