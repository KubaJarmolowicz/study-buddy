import { DefaultRequestBody, rest } from "msw";
import { db } from "mocks/db";
import faker from "faker";
import { INote } from "components/molecules/Note/Note";

type GetNotesRequest = DefaultRequestBody;

interface GetNotesResponse {
	notes: INote[];
}

type CreateNewNoteRequest = Omit<INote, "id">;

interface CreateNewNoteResponse {
	notes: INote;
}

interface DeleteNoteRequest {
	id: string;
}

type DeleteNoteResponse = undefined;

export const notes = [
	rest.get<GetNotesRequest, GetNotesResponse>("/notes", (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }));
	}),
	rest.post<CreateNewNoteRequest, CreateNewNoteResponse>(
		"/notes",
		(req, res, ctx) => {
			if (req.body.title && req.body.content) {
				const newNote = {
					id: faker.datatype.uuid(),
					title: req.body.title,
					content: req.body.content,
				};

				db.note.create(newNote);

				return res(
					ctx.status(201),
					ctx.json({
						notes: newNote,
					})
				);
			}

			return res(ctx.status(400));
		}
	),

	rest.delete<DeleteNoteRequest, DeleteNoteResponse>(
		"/notes",
		(req, res, ctx) => {
			if (req.body.id) {
				db.note.delete({
					where: {
						id: {
							equals: req.body.id,
						},
					},
				});

				return res(ctx.status(200));
			}

			return res(ctx.status(400));
		}
	),
];

export type NoteHandlersType = typeof notes;
