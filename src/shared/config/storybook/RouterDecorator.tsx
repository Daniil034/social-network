import { StoryFn } from '@storybook/react';
import { withRouter } from 'shared/lib/providers/withRouter/withRouter';

export function RouterDecorator(Story: StoryFn) {
    return withRouter(<Story />);
}
