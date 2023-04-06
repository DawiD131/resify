import UiCircleButton from '../../ui/atoms/UiCircleButton.vue';

export default {
  title: 'Ui/atoms/UiCircleButton',
  component: UiCircleButton,
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: ['success', 'danger']
    }
  }
};

const Template = (args) => ({
  components: { UiCircleButton },
  setup() {
    return { args };
  },
  template: '<UiCircleButton v-bind="args" />'
});

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Upload photo'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Remove item'
};
