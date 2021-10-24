import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
	reducerPath: "studentsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: headers => {
			const token = localStorage.getItem("token");

			if (token) {
				headers.set("authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["Students"],
	endpoints: builder => ({
		getStudentById: builder.query({
			query: id => ({
				url: `students/${id}`,
			}),
			providesTags: ["Students"],
		}),

		getStudentsByGroup: builder.query({
			query: groupId => ({
				url: `groups/${groupId}`,
			}),
			providesTags: ["Students"],
		}),
		findStudents: builder.query({
			query: body => ({
				url: "students/search",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Students"],
		}),
	}),
});

export const {
	useGetStudentByIdQuery,
	useGetStudentsByGroupQuery,
	useFindStudentsQuery,
} = studentsApi;
