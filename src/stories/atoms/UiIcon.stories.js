import UiIcon from '../../ui/atoms/UiIcon/UiIcon.vue';

export default {
  title: 'Ui/atoms/Icon',
  component: UiIcon,
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: ['heart', 'star', 'minus', 'plus']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['xxs', 'xs', 'l', 'xl', 'xxl']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['danger', 'primary', 'yellow', 'black']
    },
    withAction: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiIcon },
  setup() {
    return { args };
  },
  template: '<UiIcon v-bind="args" />'
});

export const Heart = Template.bind({});

Heart.args = {
  color: 'danger',
  variant: 'heart',
  size: 'xl'
};

export const Star = Template.bind({});

Star.args = {
  color: 'yellow',
  variant: 'star',
  size: 'xl'
};

export const Minus = Template.bind({});

Minus.args = {
  color: 'black',
  variant: 'minus',
  size: 'xl'
};

export const Plus = Template.bind({});

Plus.args = {
  color: 'black',
  variant: 'plus',
  size: 'xl'
};

export const WithAction = Template.bind({});

WithAction.args = {
  color: 'danger',
  variant: 'heart',
  size: 'xl',
  withAction: true
};
