import UiInput from '../../ui/atoms/UiInput.vue';

export default {
  title: 'Ui/atoms/UiInput',
  component: UiInput
};

const Template = (args) => ({
  components: { UiInput },
  setup() {
    return { args };
  },
  template: '<UiInput v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  name: 'firstName',
  label: 'First name',
  isValid: false,
  errorMessage: 'field is required'
};
