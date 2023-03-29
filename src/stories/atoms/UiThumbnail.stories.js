import UiThumbnail from '../../ui/atoms/UiThumbnail.vue';

export default {
  title: 'Ui/atoms/Thumbnail',
  component: UiThumbnail,
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium']
    }
  }
};

const Template = (args) => ({
  components: { UiThumbnail },
  setup() {
    return { args };
  },
  template: '<UiThumbnail v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  src: 'https://eduenglishpassport.sru.ac.th/assets/images/users/1.jpg',
  alt: 'user'
};
