import { setupWorker } from "msw";
import { handlers } from "mocks/handlers";
import { db } from "mocks/db";

export const worker = setupWorker(...handlers);

const seed = () => {
	const grades = [
		db.grade.create({ subject: "Business Philosophy" }),
		db.grade.create({ subject: "Marketing" }),
		db.grade.create({ subject: "Modern Economy" }),
	];

	db.group.create({
		id: "A",
	});
	db.group.create({
		id: "B",
	});
	db.group.create({
		id: "C",
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
