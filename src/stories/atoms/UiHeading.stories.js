import UiHeading from '../../ui/atoms/UiHeading/UiHeading.vue';

export default {
  title: 'Ui/atoms/UiHeading',
  component: UiHeading,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['dark', 'light', 'dark-light']
    }
  }
};

const Template = (args) => ({
  components: { UiHeading },
  setup() {
    return { args };
  },
  template: '<UiHeading v-bind="args" >Some text</UiHeading>'
});

export const First = Template.bind({});
First.args = {
  size: 'h1',
  color: 'dark'
};

export const Second = Template.bind({});
Second.args = {
  size: 'h2',
  color: 'dark'
};

export const Third = Template.bind({});
Third.args = {
  size: 'h3',
  color: 'dark'
};

export const Fourth = Template.bind({});
Fourth.args = {
  size: 'h4',
  color: 'dark'
};

export const Fifth = Template.bind({});
Fifth.args = {
  size: 'h5',
  color: 'dark'
};

export const Sixth = Template.bind({});
Sixth.args = {
  size: 'h6',
  color: 'dark'
};
