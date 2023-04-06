import UiRating from '../../ui/molecules/UiRating.vue';

export default {
  title: 'Ui/molecules/UiRating',
  component: UiRating,
  argTypes: {
    rate: {
      control: {
        type: 'number'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiRating },

  setup() {
    return { args };
  },
  template: '<UiRating v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  rate: 4
};
