import ErrorMessage, { IErrorMsgProps } from "./ErrorMessage";
import styled from "styled-components";
import { Story, Meta } from "@storybook/react/types-6-0";

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden !important;
`;

export default {
	title: "Components/Molecules/ErrorMessage",
	component: ErrorMessage,
	argTypes: { label: { control: "text", defaultValue: "Login" } },
} as Meta;

const Template: Story<IErrorMsgProps> = args => (
	<Wrapper>
		<ErrorMessage {...args} />
	</Wrapper>
);

export const Default = Template.bind({});

Default.args = {};
