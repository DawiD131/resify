import UiHeader from '../../ui/organisms/UiHeader.vue';

export default {
  title: 'Ui/organisms/UiHeader',
  component: UiHeader,
  argTypes: {}
};

const Template = (args) => ({
  components: { UiHeader },

  setup() {
    return { args };
  },
  template: '<UiHeader v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {};
