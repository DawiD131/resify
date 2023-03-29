import UiText from '../../ui/atoms/UiText/UiText.vue';

export default {
  title: 'Ui/atoms/Text',
  component: UiText,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['xxs', 'xs', 's', 'l', 'xl', 'xxl']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['dark', 'light', 'dark-light']
    }
  }
};

const Template = (args) => ({
  components: { UiText },
  setup() {
    return { args };
  },
  template: '<UiText v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'xxl',
  text: 'Some text',
  color: 'dark'
};
