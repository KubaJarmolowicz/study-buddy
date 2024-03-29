import StudentsListItem, { IListItemProps } from "./StudentsListItem";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
	title: "Components/Molecules/StudentsListItem",
	component: StudentsListItem,
	argTypes: {},
} as Meta;

const Template: Story<IListItemProps> = args => <StudentsListItem {...args} />;

export const BadGrades = Template.bind({});

BadGrades.args = {
	userData: {
		id: "sdwf",
		group: "A",
		course: "Business Technology",
		grades: [{ id: "SDFESDF", subject: "yooo", average: 5.0 }],
		name: "Adam Romański",
		average: 2.0,
		attendance: "55",
	},
};

export const MediumGrades = Template.bind({});

MediumGrades.args = {
	userData: {
		id: "srdf",
		group: "A",
		course: "Business Technology",
		grades: [{ id: "SDFTSDF", subject: "yooo", average: 5.0 }],
		name: "Adam Romański",
		average: 3.5,
		attendance: "55",
	},
};

export const GoodGrades = Template.bind({});

GoodGrades.args = {
	userData: {
		id: "s5df",
		group: "A",
		course: "Business Technology",
		grades: [{ id: "SDFYSDF", subject: "yooo", average: 5.0 }],
		name: "Adam Romański",
		average: 5.0,
		attendance: "55",
	},
};
