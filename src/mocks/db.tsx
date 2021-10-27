import { factory, manyOf, primaryKey } from "@mswjs/data";
import faker from "faker";
import { Group } from "store/api/groups";

faker.seed(123);

const groups = ["A", "B", "C"];
const eventTypes = ["workshop", "exam", "lecture"];
const getRandomValue = (array: any[], index: number) => array[index];
const getRandomAverage = () =>
	faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

const getAllowedGroup = () => {
	let createdGroupsCounter = 0;

	return () => {
		const resovledGroup = Group[createdGroupsCounter] ?? Group[0];

		createdGroupsCounter++;

		return resovledGroup;
	};
};

export const db = factory({
	student: {
		id: primaryKey(faker.datatype.uuid),
		name: () => faker.fake("{{name.firstName}} {{name.lastName}}"),
		attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
		average: getRandomAverage,
		group: () =>
			getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
		course: () => faker.fake("{{company.bsAdjective}} {{company.bsNoun}}"),
		grades: manyOf("grade"),
	},
	group: {
		id: primaryKey(getAllowedGroup()),
	},
	event: {
		id: primaryKey(faker.datatype.uuid),
		type: () =>
			getRandomValue(eventTypes, faker.datatype.number({ min: 0, max: 2 })),
		group: () =>
			getRandomValue(groups, faker.datatype.number({ min: 0, max: 2 })),
		subject: () => faker.fake("{{company.bsAdjective}} {{company.bsNoun}}"),
		date: faker.date.soon,
	},
	teacher: {
		id: primaryKey(() => "1"),
		name: () => "Jacek Sobczak",
		login: () => "a@a.com",
		password: () => "123",
	},
	note: {
		id: primaryKey(faker.datatype.uuid),
		title: () => "Lorem ipsum dolor sit amet",
		content: () => "Lorem ipsum dolor sit amet",
	},
	grade: {
		id: primaryKey(faker.datatype.uuid),
		subject: String,
		average: () => getRandomAverage(),
	},
});
