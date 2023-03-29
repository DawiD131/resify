import UiButton from '../../ui/atoms/UiButton.vue';

export default {
  title: 'Ui/atoms/Button',
  component: UiButton,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['medium', 'big']
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['primary', 'secondary', 'success', 'danger']
    }
  }
};

const Template = (args) => ({
  components: { UiButton },
  setup() {
    return { args };
  },
  template: '<UiButton v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'Button',
  size: 'big'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Button',
  size: 'big'
};
