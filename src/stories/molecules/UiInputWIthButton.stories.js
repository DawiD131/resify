import UiInputWithButton from '../../ui/molecules/UiInputWithButton.vue';

export default {
  title: 'Ui/molecules/UiInputWithButton',
  component: UiInputWithButton
};

const Template = (args) => ({
  components: { UiInputWithButton },
  setup() {
    return { args };
  },
  template: '<UiInputWithButton v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'firstName',
  label: 'First name',
  isValid: false,
  errorMessage: 'field is required'
};
