import React from 'react';
import Player from './Player';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default { title: 'Player', decorators: [withKnobs]  };

export const DefaultPlayer = () => <Player name={text('Name', 'Pacoli')} removePlayer={action('Remove Player')} />;