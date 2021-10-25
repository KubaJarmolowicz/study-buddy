import { DefaultRequestBody, rest } from "msw";
import { db } from "mocks/db";
import { IStudent } from "components/molecules/StudentDetails/Student.Details";

interface IGroup {
	id: string;
}

interface MultiGroupResponse {
	groups: IGroup[];
}

interface StudentsByGroupRequest {
	id: IGroup;
}

interface StudentsByGroupResponse {
	students: IStudent[];
}

export const groups = [
	rest.get<DefaultRequestBody, MultiGroupResponse>(
		"/groups",
		(req, res, ctx) => {
			return res(ctx.status(200), ctx.json({ groups: db.group.getAll() }));
		}
	),
	rest.get<StudentsByGroupRequest, StudentsByGroupResponse>(
		"/groups/:id",
		(req, res, ctx) => {
			if (req.params.id) {
				const matchingStudents = db.student.findMany({
					where: {
						group: {
							equals: req.params.id,
						},
					},
				});
				return res(
					ctx.status(200),
					ctx.json({
						students: matchingStudents,
					})
				);
			}

			return res(ctx.status(404));
		}
	),
];

export type GroupHandlersType = typeof groups;
