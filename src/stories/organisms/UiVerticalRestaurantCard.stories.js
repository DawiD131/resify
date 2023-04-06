import UiVerticalCard from '../../ui/organisms/UiVerticalRestaurantCard.vue';

export default {
  title: 'Ui/organisms/UiVerticalCard',
  component: UiVerticalCard,
  argTypes: {
    rate: {
      control: {
        type: 'number'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiVerticalCard },

  setup() {
    return { args };
  },
  template: '<UiVerticalCard v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  rate: 4,
  title: 'Restaurant name',
  thumbUrl:
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-animated-logo-template-design-6da604bf6329fd9931237066088d59d8_screen.jpg?ts=1601244370',
  tags: ['italian', 'good taste', 'pasta', 'pizza', 'drinks'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis venenatis placerat...'
};
