import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import heroImg from '../../../images/fpo-1200x650.png';
import Hero from './Hero';

const stories = storiesOf('Blocks/Hero', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Hero heroimgsrc={ heroImg } heroimgalt="Alt Text" title="Hero Title" description="This is the hero description">
    Hello Hero
  </Hero>);
