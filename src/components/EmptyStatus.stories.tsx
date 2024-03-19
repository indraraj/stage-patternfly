import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import  EmptyStatus from './EmptyStatus';

const meta = {
  title: 'App/Components/EmptyStatus',
  component: EmptyStatus,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof EmptyStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    heading: 'Empty State (Stub Support Module)',
    message:
      "This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.",
    subMessage:
      "This text has overridden a css component variable to demonstrate how to apply customizations using PatternFly's global variable API.",
  
  },
};
