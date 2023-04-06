import UiButton from '../../ui/atoms/UiButton.vue';

export default {
  title: 'Ui/atoms/UiButton',
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
  template: '<UiButton v-bind="args">Button</UiButton>'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'big'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'big'
};
