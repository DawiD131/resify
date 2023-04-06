import UiFooter from '../../ui/organisms/UiFooter.vue';

export default {
  title: 'Ui/organisms/UiFooter',
  component: UiFooter,
  argTypes: {}
};

const Template = (args) => ({
  components: { UiFooter },

  setup() {
    return { args };
  },
  template: '<UiFooter v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};
