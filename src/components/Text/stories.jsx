import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
    Lorem its helpful when we need a long text used to see how the component will render the strings and maybe if the space on label is covering all words and if this will fit or maybe if we will get a overflow breaking the page with a ugly interface.
    `,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
