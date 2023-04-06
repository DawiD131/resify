import UiLink from '../../ui/atoms/UiLink/UiLink.vue';

export default {
  title: 'Ui/atoms/UiLink',
  component: UiLink,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['xxs', 'xs', 's', 'l', 'xl', 'xxl']
    },
    isActive: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiLink },
  setup() {
    return { args };
  },
  template: '<UiLink v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'xxs',
  label: 'Some text'
};

export const Active = Template.bind({});
Active.args = {
  size: 'xxs',
  label: 'Some text',
  isActive: true
};
