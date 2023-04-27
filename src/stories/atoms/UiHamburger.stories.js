import UiHamburger from '../../ui/atoms/UiHamburger.vue';

export default {
  title: 'Ui/atoms/UiHamburger',
  component: UiHamburger
};

const Template = (args) => ({
  components: { UiHamburger },
  setup() {
    return { args };
  },
  template: '<UiHamburger v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true
};
