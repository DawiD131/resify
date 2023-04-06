import UiLogo from '../../ui/atoms/UiLogo.vue';

export default {
  title: 'Ui/atoms/UiLogo',
  component: UiLogo
};

const Template = (args) => ({
  components: { UiLogo },
  setup() {
    return { args };
  },
  template: '<UiLogo v-bind="args" />'
});

export const Primary = Template.bind({});
