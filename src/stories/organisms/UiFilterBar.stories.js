import UIFilterBar from '../../ui/organisms/UiFilterBar.vue';

export default {
  title: 'Ui/organisms/UiFilterBar',
  component: UIFilterBar
};

const Template = (args) => ({
  components: { UIFilterBar },

  setup() {
    return { args };
  },
  template: '<UIFilterBar v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  firstCriteria: {
    title: 'Location',
    options: [
      {
        id: 'jn1kj2nkjn',
        value: 'Warsaw'
      },
      {
        id: 'asdnasidji',
        value: 'Krakow'
      }
    ],
    currentCriteria: [
      {
        id: 'asdnasidji',
        value: 'Krakow'
      }
    ]
  },
  secondCriteria: {
    title: 'Tags',
    options: [
      {
        id: 'jn1kj2nkjn',
        value: 'Italian'
      },
      {
        id: 'asdnasidji',
        value: 'Polish food'
      }
    ],
    currentCriteria: [
      {
        id: 'asdnasidji',
        value: 'Polish food'
      }
    ]
  }
};
