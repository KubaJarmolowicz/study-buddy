import { setupWorker } from "msw";
import { handlers } from "mocks/handlers";
import { db } from "mocks/db";
import { Group } from "store/api/groups";

export const worker = setupWorker(...handlers);

const seed = () => {
	const grades = [
		db.grade.create({ subject: "Business Philosophy" }),
		db.grade.create({ subject: "Marketing" }),
		db.grade.create({ subject: "Modern Economy" }),
	];

	db.group.create({
		id: Group[0],
	});
	db.group.create({
		id: Group[1],
	});
	db.group.create({
		id: Group[2],
	});

	db.teacher.create();

	db.note.create();
	db.note.create();

	for (let i = 0; i < 15; i++) {
		db.student.create({ grades });
		db.event.create();
	}
};

seed();

// window.mocks = {
// 	seed,
// 	getStudents: () => db.student.getAll(),
// 	getEvents: () => db.event.getAll(),
// 	getGroups: () => db.group.getAll(),
// };
