import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p style="text-align: center;">Landing Page developed by <strong>Wendel Dem&eacute;trio</strong>. </p>
<p>&nbsp;&nbsp; </p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
