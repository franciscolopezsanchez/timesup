import React from 'react';
import Player from './';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default { title: 'Player', decorators: [withKnobs]  };

export const WithoutProps = () => <Player />;
export const WithName = () => <Player name={text('Name', 'Pacoli')} />;
export const WithNameAndOnDelete = () => <Player name={text('Name', 'Pacoli')} onRemovePlayer={action('Remove Player')}  />;
export const Width400 = () => <div style={{ width: '400px' }}>
    <Player name={text('Name', 'Pacoli')} onRemovePlayer={action('Remove Player')}  />
</div>;
export const Width200 = () => <div style={{ width: '200px' }}>
    <Player name={text('Name', 'Pacoli')} onRemovePlayer={action('Remove Player')}  />
</div>;

