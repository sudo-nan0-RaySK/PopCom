import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from './index';
import Themes from '../utils/themes';

export default {
    title: 'Button component',
    decorators: [withKnobs],
};

export const button = () => {
    const message = text('Text', 'Click Here');
    const theme = select('Theme', Themes, Themes.Default);

    return (
        <div className={`theme-${theme}`}>
            <Button text={message} />
        </div>
    );
};