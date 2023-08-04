import { StoryFn } from '@storybook/react';
import { withTranslation } from 'shared/lib/providers/withTranslation/withTranslation';

export function TranslationDecorator(Story: StoryFn) {
    return withTranslation(<Story />);
}
