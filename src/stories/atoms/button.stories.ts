import { Story } from "@storybook/vue3";
import "@/assets/main.style.css";
import ButtonComponent from "@/components/atoms/button.vue";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
  argTypes: {
    type: "primary",
    isRound: false,
  },
};

const Template: Story = (args) => ({
  components: { ButtonComponent },
  setup() {
    return { args };
  },
  template: '<button-component v-bind="args">Button</button-component>',
});

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  isRound: false,
};
