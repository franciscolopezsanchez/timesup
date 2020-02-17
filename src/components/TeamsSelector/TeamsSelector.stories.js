import React from 'react';
import TeamsSelector from './';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default { title: 'Teams Selector', decorators: [withKnobs]  };

export const WithoutProps = () =>
    <div style={{ width: '800px'}}>
        <TeamsSelector
            teams={[
                {
                    title: 'Team One',
                    players: [
                            { name: 'Paco', onRemovePlayer: action('Remove Paco')},
                            { name: 'Ivan', onRemovePlayer: action('Remove Ivan')},
                        ],
                    onAddPlayer: action('Add player team one')
                },
                {
                    title: 'Team Two',
                    players: [
                        { name: 'Marcelo', onRemovePlayer: action('Remove Marcelo')},
                        { name: 'Sousa', onRemovePlayer: action('Remove Sousa')},
                    ]
                }
                ]
            }
            onAddTeam={action('Add Team')}
        />
    </div>;