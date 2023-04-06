import UiSearchInput from '../../ui/molecules/UiSearchInput/UiSearchInput.vue';

export default {
  title: 'Ui/molecules/UiSearchInput',
  component: UiSearchInput,
  argTypes: {
    isLoading: {
      control: {
        type: 'boolean'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = (args) => ({
  components: { UiSearchInput },

  setup() {
    return { args };
  },
  template: '<UiSearchInput v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  isLoading: false,
  placeholder: 'search by restaurant name'
};
