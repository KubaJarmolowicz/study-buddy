import { rest } from "msw";
import { db } from "mocks/db";
import { IStudent } from "components/molecules/StudentDetails/Student.Details";

interface GetStudentsRequest {
	id: string;
}

interface GetStudentsResponse {
	students: IStudent;
}

interface SearchStudentsRequest {
	searchPhrase: string;
}

interface SearchStudentsResponse {
	students: IStudent[];
}

export const students = [
	rest.get<GetStudentsRequest, GetStudentsResponse>(
		"/students/:id",
		(req, res, ctx) => {
			if (req.params.id) {
				const matchingStudent = db.student.findFirst({
					where: {
						id: {
							equals: req.params.id,
						},
					},
				});
				if (!matchingStudent) {
					return res(ctx.status(404));
				}
				return res(
					ctx.status(200),
					ctx.json({
						students: matchingStudent,
					})
				);
			}
		}
	),

	rest.post<SearchStudentsRequest, SearchStudentsResponse>(
		"/students/search",
		(req, res, ctx) => {
			if (req.body.searchPhrase !== "") {
				const matchingStudents = db.student.findMany({
					where: {
						name: {
							contains: req.body.searchPhrase,
						},
					},
				});
				return res(
					ctx.status(200),
					ctx.json({
						students: matchingStudents,
					})
				);
			} else {
				return res(
					ctx.status(200),
					ctx.json({
						students: db.student.getAll(),
					})
				);
			}
		}
	),
];

export type StudentHandlersType = typeof students;
