import { rest } from "msw";
import { students } from "mocks/data/students";
import { groups } from "mocks/data/groups";

export const handlers = [
	rest.get("/groups", (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				groups,
			})
		);
	}),

	rest.post("/students", (req, res, ctx) => {
		if (req.body.researchedStudent) {
			const requestedStudents = students.filter(student => {
				const [firstName, lastName] = student.name.split(" ");
				return (
					firstName
						.toLowerCase()
						.startsWith(req.body.researchedStudent.toLowerCase()) ||
					lastName
						.toLowerCase()
						.startsWith(req.body.researchedStudent.toLowerCase())
				);
			});
			return res(ctx.status(200), ctx.json({ data: requestedStudents }));
		}
	}),
	rest.get("/students/:group", (req, res, ctx) => {
		if (req.params.group) {
			const requestedStudents = students.filter(
				student => student.group === req.params.group
			);

			return res(
				ctx.status(200),
				ctx.json({
					students: requestedStudents,
				})
			);
		}

		return res(
			ctx.status(200),
			ctx.json({
				students,
			})
		);
	}),
];