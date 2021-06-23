/* eslint-disable import/no-anonymous-default-export */
import StudentsListItem from "./StudentsListItem";

export default {
	title: "Components/Molecules/StudentsListItem",
	component: StudentsListItem,
	argTypes: {},
};

const Template = args => <StudentsListItem {...args} />;

export const BadGrades = Template.bind({});

BadGrades.args = {
	userData: { name: "Adam Romański", average: "2.0", attendance: "55%" },
};

export const MediumGrades = Template.bind({});

MediumGrades.args = {
	userData: { name: "Adam Romański", average: "3.5", attendance: "55%" },
};

export const GoodGrades = Template.bind({});

GoodGrades.args = {
	userData: { name: "Adam Romański", average: "5.0", attendance: "55%" },
};
