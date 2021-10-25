import { Button, IButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "Components/Atoms/Button",
	component: Button,
} as Meta;

const Template: Story<IButtonProps> = args => (
	<Button {...args}>Read more</Button>
);

export const Default = Template.bind({});

export const Big: Story = Template.bind({});
Big.args = {
	isBig: true,
};
