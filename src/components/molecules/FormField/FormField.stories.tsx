import FormField, { IFormFieldProps } from "./FormField";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "Components/Molecules/FormField",
	component: FormField,
	argTypes: { label: { control: "text", defaultValue: "Login" } },
} as Meta;

const Template: Story<IFormFieldProps> = args => <FormField {...args} />;

export const Default = Template.bind({});

Default.args = {
	label: "Login",
	name: "test",
	id: "test",
};
