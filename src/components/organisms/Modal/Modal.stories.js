import Modal from "./Modal";
import StudentDetails from "components/molecules/StudentDetails/Student.Details";

export default {
	title: "Components/organisms/Modal",
	component: Modal,
};

const exampleStudent = {
	id: "1",
	name: "Adam Romański",
	attendance: "39%",
	average: "2.3",
	group: "A",
};

const Template = args => (
	<Modal {...args}>
		<StudentDetails student={exampleStudent} />
	</Modal>
);

export const Default = Template.bind({});
