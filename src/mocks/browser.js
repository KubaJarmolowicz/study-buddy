import { setupWorker } from "msw";
import { db } from "./db";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

const seed = () => {
	["A", "B", "C"].forEach(groupId => {
		db.group.create({ id: groupId });
	});

	for (let i = 0; i < 15; i++) {
		db.student.create();
		db.event.create();
	}
};

seed();

window.mocks = {
	seed,
	getGroups: () => db.group.getAll(),
	getStudents: () => db.student.getAll(),
	getEvents: () => db.event.getAll(),
};
