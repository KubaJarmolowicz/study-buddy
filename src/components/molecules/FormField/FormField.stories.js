import FormField from "./FormField";

export default {
	title: "Components/Molecules/FormField",
	component: FormField,
	argTypes: { label: { control: "text", defaultValue: "Login" } },
};

const Template = args => <FormField {...args} />;

export const Default = Template.bind({});

Default.args = {
	label: "Login",
	name: "test",
	id: "test",
};
