import { createStore } from "redux";

export const addNote = payload => {
	return { type: "notes/add", payload };
};

export const removeNote = payload => {
	return { type: "notes/remove", payload };
};

const initialState = {
	notes: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "notes/add": {
			return {
				...state,
				notes: [...state.notes, { ...action.payload }],
			};
		}

		case "notes/remove": {
			return {
				...state,
				notes: state.notes.filter(note => note.id !== action.payload.id),
			};
		}

		default:
			return state;
	}
};

export const store = createStore(reducer);
