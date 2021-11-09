import React  from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import Button from './Button';


const stories = storiesOf('Buttons/Button', module);

stories.addDecorator(withSmartKnobs).addDecorator(withKnobs);

stories.add('Default', () =>
  <Button onClick={() => console.log('clicked!!')} />);

stories.add('Secondary', () =>
  <Button issecondary text="Secondary Button" />);
