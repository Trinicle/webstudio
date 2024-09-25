import {
  type Meta,
  type StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { WsButtonDirective } from './ws-button.directive';

const meta: Meta<WsButtonDirective> = {
  title: 'Components / Button',
  component: WsButtonDirective,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    color: 'default',
    size: 'default',
    mode: 'default',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'glass',
        'outline',
        'ghost',
        'link',
        'square',
        'circle',
      ],
      control: {
        type: 'select',
      },
    },
    color: {
      options: ['default', 'error', 'secondary', 'primary', 'accent'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['default', 'xs', 'sm', 'lg', 'responsive'],
      control: {
        type: 'select',
      },
    },
    mode: {
      options: ['default', 'active', 'disabled'],
      control: {
        type: 'select',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [WsButtonDirective],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  render: ({ ...args }) => ({
    props: args,
    template: `<button wsBtn ${argsToTemplate(args)}>Click me</button>`,
  }),
};

export default meta;
type Story = StoryObj<WsButtonDirective>;

export const Default: Story = {
  args: {
    variant: 'default',
    color: 'default',
    size: 'default',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
    color: 'default',
    size: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'default',
    size: 'default',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'default',
    size: 'default',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    color: 'default',
    size: 'default',
  },
};
