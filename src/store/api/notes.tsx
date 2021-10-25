import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INote } from "components/molecules/Note/Note";

interface Notes {
	notes: INote[];
}

export const notesApi = createApi({
	reducerPath: "notesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
	}),
	tagTypes: ["Notes"],
	endpoints: builder => ({
		getNotes: builder.query<Notes, void>({
			query: () => "notes",
			providesTags: ["Notes"],
		}),

		addNote: builder.mutation({
			query: body => ({
				url: "notes",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Notes"],
		}),
		removeNote: builder.mutation({
			query: body => ({
				url: "notes",
				method: "DELETE",
				body,
			}),
			invalidatesTags: ["Notes"],
		}),
	}),
});

export const {
	useGetNotesQuery,
	useAddNoteMutation,
	useRemoveNoteMutation,
} = notesApi;
