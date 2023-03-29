import UiTag from '../../ui/atoms/UiTag.vue';

export default {
  title: 'Ui/atoms/Tag',
  component: UiTag
};

const Template = (args) => ({
  components: { UiTag },
  setup() {
    return { args };
  },
  template: '<UiTag v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'italian food'
};
