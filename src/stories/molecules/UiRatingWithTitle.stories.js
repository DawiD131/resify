import UiRatingWithTitle from '../../ui/molecules/UiRatingWithTitle.vue';

export default {
  title: 'Ui/molecules/UiRatingWithTitle',
  component: UiRatingWithTitle,
  argTypes: {
    rate: {
      control: {
        type: 'number'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiRatingWithTitle },

  setup() {
    return { args };
  },
  template: '<UiRatingWithTitle v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  rate: 4,
  title: 'Restaurant name',
  thumbUrl:
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370'
};
