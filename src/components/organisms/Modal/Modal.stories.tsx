import Modal, { IModalProps } from "./Modal";
import StudentDetails from "components/molecules/StudentDetails/Student.Details";
import { Story, Meta } from "@storybook/react/types-6-0";
import { IStudent } from "components/molecules/StudentDetails/Student.Details";

export default {
	title: "Components/organisms/Modal",
	component: Modal,
} as Meta;

const exampleStudent: IStudent = {
	id: "1",
	name: "Adam Romański",
	attendance: "39%",
	average: 2.3,
	group: "A",
	course: "Business Philosophy",
	grades: [
		{ id: "asdfsdf", subject: "Business Philosophy", average: 3.3 },
		{ id: "tyuktyujk", subject: "Marketing", average: 4.7 },
		{ id: "nhgtfnhj", subject: "Modern Economy", average: 2.5 },
	],
};

const Template: Story<IModalProps> = args => (
	<Modal {...args}>
		<StudentDetails student={exampleStudent} />
	</Modal>
);

export const Default = Template.bind({});
