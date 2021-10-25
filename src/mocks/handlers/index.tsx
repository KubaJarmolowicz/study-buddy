import { groups } from "mocks/handlers/groups";
import { students } from "mocks/handlers/students";
import { auth } from "mocks/handlers/auth";
import { notes } from "./notes";
import { AuthHandlersType } from "mocks/handlers/auth";
import { NoteHandlersType } from "mocks/handlers/notes";
import { StudentHandlersType } from "mocks/handlers/students";
import { GroupHandlersType } from "mocks/handlers/groups";

type CombinedHandlers = AuthHandlersType &
	NoteHandlersType &
	StudentHandlersType &
	GroupHandlersType;

export const handlers: CombinedHandlers = [
	...groups,
	...students,
	...auth,
	...notes,
];
