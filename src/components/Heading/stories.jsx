import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Top hein?',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;
